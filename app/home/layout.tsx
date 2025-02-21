export default function HomeLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Main content */}
            <main className="flex-grow p-4">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4">
                <p className="text-center">© 2025 Mi Aplicación</p>
            </footer>
        </div>
    );
}
