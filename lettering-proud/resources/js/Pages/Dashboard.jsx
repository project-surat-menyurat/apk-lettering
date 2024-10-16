import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Content from "@/Components/Homepage/Content";
import Footer from "@/Components/Homepage/Footer";
import Header from "@/Components/Homepage/Header";
import Navbar from "@/Components/Homepage/Navbar";
import Delete from "@/Components/Homepage/Delete";
import Sidebar from "@/Components/Homepage/Sidebar";




export default function Dashboard() {
    return (
        <div>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <Delete />
                <Sidebar />
                <Header />
                <Content />
                <Footer />
            </div>
        </div>
    );
}
