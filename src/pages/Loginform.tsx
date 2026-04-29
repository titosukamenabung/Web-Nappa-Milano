import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { Link } from "react-router-dom";

type FormData = {
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "password minimal 8 karakter")
})

export default function LoginForm() {
   const {
    register,
     handleSubmit,
      formState: {errors},
    } =useForm<FormData>({
        resolver: zodResolver(schema),
    });


    const onSubmit = (data: FormData) => {
        console.log(data);
};
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputText 
            label="Email" 
            nama="email" 
            register={register}
            error={errors.email?.message}
            />

            <InputText 
            label="Password" 
            nama="password" 
            register={register}
            error={errors.password?.message}
            />

            <div>
                <button type="submit">Login</button>
            </div>

            <div>
                <p>
                    Belum Punya Akun??{" "}
                    <Link to="/register" className="text-red-600">
                        Daftar Disini
                    </Link>
                </p>
            </div>
        </form>
    </div>
}