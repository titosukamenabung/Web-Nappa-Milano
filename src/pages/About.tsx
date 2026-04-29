import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      <section className="py-20 px-5 max-w-6xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-red-900 mb-6">
          Tentang Nappa Milano
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          Elegansi klasik dengan sentuhan modern, terinspirasi dari pusat fashion dunia.
        </p>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Nappa Milano hadir sebagai representasi gaya hidup modern yang memadukan
            keanggunan klasik dengan sentuhan kontemporer. Terinspirasi dari estetika
            kota Milan, brand ini menghadirkan produk yang tidak hanya stylish, tetapi
            juga memiliki nilai kualitas dan ketahanan.
          </p>

          <p>
            Dengan fokus pada detail, material pilihan, dan craftsmanship yang teliti,
            setiap produk Nappa Milano dirancang untuk memberikan kesan eksklusif
            sekaligus kenyamanan dalam penggunaan sehari-hari.
          </p>

          <p>
            Kami percaya bahwa fashion adalah bentuk ekspresi diri. Oleh karena itu,
            setiap koleksi kami diciptakan untuk mendukung rasa percaya diri dan
            memperkuat karakter personal Anda.
          </p>
        </div>

        {/* Highlight */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-center">
          <div className="p-6 border rounded-2xl hover:shadow-lg transition">
            <h3 className="font-semibold text-red-900 mb-2">Premium Quality</h3>
            <p className="text-sm text-gray-500">
              Menggunakan material terbaik dengan standar kualitas tinggi.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-lg transition">
            <h3 className="font-semibold text-red-900 mb-2">Timeless Design</h3>
            <p className="text-sm text-gray-500">
              Desain elegan yang tetap relevan sepanjang waktu.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-lg transition">
            <h3 className="font-semibold text-red-900 mb-2">Craftsmanship</h3>
            <p className="text-sm text-gray-500">
              Detail pengerjaan yang presisi dan penuh dedikasi.
            </p>
          </div>
        </div>

        {/* Store Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-red-900 mb-4">
            Temukan Kami
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Kunjungi store resmi kami untuk melihat koleksi lengkap dan mendapatkan pengalaman belanja terbaik.
          </p>

          {/* BUTTON STORE */}
          <div className="flex justify-center gap-4 flex-wrap">
            
            {/* Shopee */}
            <a 
              href="https://shopee.co.id/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
                Shopee
              </button>
            </a>

            {/* Website resmi */}
            <a 
              href="https://nappamilano.id/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Website Resmi
              </button>
            </a>

          </div>
        </div>

      </section>
    </div>
  );
}