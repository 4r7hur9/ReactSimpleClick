export default function InicioPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Simple Click!</h1>
      <p className="text-lg text-gray-700">
        Clique no botão abaixo para começar a jogar.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Começar a Jogar
      </button>
    </div>
  );
}
