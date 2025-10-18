import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fieldIds = {
  email: "reg-email",
  password: "reg-password",
  confirmPassword: "reg-confirm-password",
  fullname: "reg-fullname",
  phone: "reg-phone",
};

export default function RegisterPage() {
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
            {/* <!-- Nama Lengkap --> */}
            <div>
              <Label htmlFor={fieldIds.fullname}>Nama Lengkap</Label>
              <Input id={fieldIds.fullname} type="text" required />
            </div>

            {/* <!-- Email --> */}
            <div>
              <Label htmlFor={fieldIds.email}>E-Mail</Label>
              <Input id={fieldIds.email} type="email" required />
            </div>

            {/* <!-- Phone number --> */}
            <div>
              <Label htmlFor={fieldIds.phone}>Phone Number</Label>

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
                  id={fieldIds.phone}
                  type="tel"
                  className="flex-1 border form-input"
                  required
                />
              </div>
            </div>

            {/* <!-- Kata Sandi --> */}
            <div>
              <Label htmlFor={fieldIds.password}>Kata Sandi</Label>
              <div className="relative">
                <Input id={fieldIds.password} type="password" />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer text-sm">
                  👁
                </span>
              </div>
            </div>

            {/* <!-- Konfirmasi kata sandi --> */}
            <div>
              <Label htmlFor={fieldIds.confirmPassword}>
                Konfirmasi Kata Sandi
              </Label>
              <div className="relative">
                <Input id={fieldIds.confirmPassword} type="password" />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer text-sm">
                  👁
                </span>
              </div>
            </div>

            <button type="submit" className="w-full btn btn--primary">
              Daftar
            </button>

            <a href="./login.tw.html">
              <button
                type="button"
                className="w-full btn btn--primary-shadowed"
              >
                Masuk
              </button>
            </a>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">atau</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Daftar dengan Google
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
