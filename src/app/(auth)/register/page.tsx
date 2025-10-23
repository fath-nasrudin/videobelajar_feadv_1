"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth/use-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

const fieldIds = {
  email: "reg-email",
  password: "reg-password",
  confirmPassword: "reg-confirm-password",
  fullname: "reg-fullname",
  phone: "reg-phone",
};

const fields = [
  {
    name: "email",
    label: "E-Mail",
    type: "email",
    required: true,
  },
  {
    name: "fullname",
    label: "Full Name",
    type: "text",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    Icon: LuEye,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    required: true,
    Icon: LuEye,
  },
];

const initialState = Object.fromEntries(
  fields.map((f) => [f.name, ""])
) as Record<string, string>;

export default function RegisterPage() {
  const [formData, setFormData] = useState(initialState);
  const { register } = useAuth();
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    register(formData.email, formData.password);

    router.push("/home");
  }
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center min-h-full p-8 bg-mbg-base">
        <div className="mx-auto w-full max-w-md bg-card rounded-xl border border-border p-8">
          {/* <!-- Card Register --> */}
          <h2 className="text-center text-lg font-semibold mb-1">
            Pendaftaran Akun
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Yuk, daftarkan akunmu sekarang juga.
          </p>

          {/* <!-- Form --> */}
          <form className="space-y-4">
            {fields.map((field) => {
              if (field.name === "phoneNumber") {
                return (
                  <div key={field.name}>
                    <Label htmlFor={field.name}>{field.label}</Label>

                    <div className="flex gap-4 text-sm">
                      <div className="border border-gray-300 rounded-md text-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-500">
                        <span className="inline-block bg-base-200 h-full px-3 py-2">
                          🇮🇩
                        </span>
                        <span className="inline-block py-2 pr-4">+62</span>
                        <img
                          src="/img/chevron-down.svg"
                          alt="Dropdown"
                          className="inline-block w-4 h-4 mr-2"
                        />
                      </div>

                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        className="flex-1 border form-input"
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={field.name}>
                    <Label htmlFor={field.name}>{field.label}</Label>
                    <div className="relative">
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        value={formData[field.name]}
                        onChange={handleChange}
                      />
                      {field.Icon && (
                        <field.Icon className="absolute inset-y-0 right-3 text-dark-secondary flex h-full items-center cursor-pointer size-5" />
                      )}
                    </div>
                  </div>
                );
              }
            })}

            <div className="flex flex-col gap-2">
              <Button
                type="submit"
                variant={"primary"}
                className="w-full"
                onClick={handleRegister}
              >
                Daftar
              </Button>

              <Link href="/login">
                <Button
                  variant={"primaryShadowed"}
                  type="button"
                  className="w-full"
                >
                  Masuk
                </Button>
              </Link>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-gray-500">atau</span>
                </div>
              </div>

              <Button type="button" variant={"outline"}>
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Daftar dengan Google
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
