import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <section className="grid gap-4 items-center m-0 px-8 text-slate-400 bg-slate-200 h-[100vh] ">
            <div className="fixed top-[-50vmin] -left-[50vmin] h-[100vmin] w-[100vmin] bg-sky-400  size-1/5  rounded-full"></div>
            <div className="fixed bottom-[-50vmin] -right-[50vmin] h-[100vmin] w-[100vmin] bg-blue-950  size-1/5  rounded-full"></div>

            <div className="relative z-[3] w-1/5  m-auto pt-4 px-[30px] pb-9 items-center shadow-xl bg-white overflow-hidden rounded-3xl ">
                <div className="absolute -top-72 -left-8 bg-blue-600 size-96 rounded-full mb-4">                </div>
                <div className="absolute left-28 size-16 bg-white rounded-full">
                <img
                    src="/proud.png"
                    alt="proud"
                    width="64px"
                    height="64px"
                />
                </div>
                <div className="mt-32 pb-8">
                <h2 className=" text-center">
                    Welcome back
                </h2>
                </div>
                <form onSubmit={submit} className="grid gap-3 font-inherit text-base mb-5">
                    <input
                        value={data.email}
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        type="email"
                        placeholder="Email" name="email"
                        className="rounded-full bg-slate-300 border-transparent w-full h-10 pl-6 text-black"
                    />
                    <input
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        placeholder="Password" name="password"
                        className="rounded-full bg-slate-300 border-transparent w-full h-10 pl-6 text-black"
                    />
                    <button
                        type="submit"
                        className="border-transparent bg-sky-600 text-white items-center rounded-full w-full h-10  grid font-medium cursor-pointer "
                    >
                        Sign In
                    </button>
                </form>
                <footer className="text-zinc-400 text-xs pt-2 text-center ">
                    Need an account? Sign up <a href={route('register')} className="text-blue-800">
                    here
                    </a>
                </footer>
                
                
                
                
            </div>
        </section>
        
    );
}
