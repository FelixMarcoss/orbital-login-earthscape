
import Earth from "@/components/Earth";
import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#0B1026] relative overflow-hidden">
      {/* Estrelas de fundo */}
      <div className="fixed inset-0 bg-repeat" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.1 }} />
      
      <div className="container mx-auto px-4 min-h-screen flex flex-col items-center">
        {/* Logo e título */}
        <div className="text-center mt-10 mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Cmostec <span className="text-blue-400">Automação</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Advanced automation solutions for the modern world
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 w-full flex flex-col lg:flex-row items-center justify-center gap-12 py-8">
          <div className="relative">
            <Earth />
          </div>
          <LoginForm />
        </div>

        {/* Footer */}
        <footer className="text-center py-4 text-gray-500 text-sm">
          © 2025 Cmostec Automação. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;
