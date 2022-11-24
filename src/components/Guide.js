import React from 'react'

const Guide = () => {
  return (
    <>
      <div className="bg-white mt-4">
        <div className="flex flex-col py-2 px-3">
          <div className="px-2 py-2 leading-tight">
            <h1 className="text-2xl font-semibold leading-tight">
              Choose who to welcome for your first reservation
            </h1>
          </div>
          <div className="px-2 py-2 leading-tight">
            <span className="leading-tight text-md text-gray-500">
              After your first guest, anyone can book your place{" "}
              <span className="cursor-pointer underline underline-offset-2">
                Learn more
              </span>
            </span>
          </div>
          <div className="px-2 py-2">
            <div className="p-4 w-full border rounded-md">
              <div className="flex flex-col">
                <span className="font-semibold">Any Airbnb guest</span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Get reservation faster when you welcome anyone from the
                    Airbnb community
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div className="p-4 w-full border border-gray-600 rounded-md">
              <div className="flex flex-col">
                <span className="font-semibold">An experienced guest</span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    For your first guest, welcome someone with good track record
                    on Airbnb who can offer tips for how to be a great house
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2 mt-4">
            <span className="text-xl font-semibold">We're here to Help</span>
          </div>
          <div className="px-2 py-2">
            <div className="flex space-x-2 p-4 w-full border border-gray-600 rounded-md">
              <div className="flex-shrink-0 mr-2">
                <img
                  className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Chat with Mara</span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Need some guidance? Reach out to your Superhost for
                    information and tips.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div className="flex space-x-2 p-4 w-full border border-gray-600 rounded-md">
              <div className="flex-shrink-0 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mt-2 icon icon-tabler icon-tabler-headset"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="4" y="13" rx="2" width="4" height="6"></rect>
                  <rect x="16" y="13" rx="2" width="4" height="6"></rect>
                  <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                  <path d="M18 19a6 3 0 0 1 -6 3"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">
                  Contact specialized support
                </span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Need some guidance? Reach out to your Superhost for
                    information and tips.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full px-3 pb-6 py-2 mt-4 bg-[#f7f7f7]">
          <div className="px-2 py-2">
            <span className="text-xl font-semibold">More insurance </span>
          </div>
          <div className="px-2 py-2">
            <div className="pb-4 w-full border-b border-gray-300 ">
              <div className="flex flex-col">
                <span className="font-semibold">Verifikasi identitas tamu</span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Sistem verifikasi menyeluruh kami memeriksa detail seperti
                    nama, alamat, identitas resmi, dan lainnya untuk
                    mengonfirmasikan identitas tamu yang memesan di Airbnb.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div className="pb-4 w-full border-b border-gray-300 ">
              <div className="flex flex-col">
                <span className="font-semibold">Pemeriksaan reservasi</span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Teknologi eksklusif kami menganalisis ratusan faktor dalam
                    setiap reservasi dan memblokir pemesanan tertentu yang
                    menunjukkan risiko tinggi untuk pesta yang mengganggu dan
                    kerusakan properti.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div className="pb-4 w-full border-b border-gray-300 ">
              <div className="flex flex-col">
                <span className="font-semibold">
                  Perlindungan terhadap kerusakan $3 juta USD
                </span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Airbnb akan mengganti biaya kerusakan yang disebabkan oleh
                    tamu pada rumah dan barang milik Anda, serta menyertakan
                    perlindungan khusus berikut:
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div className="pb-4 w-full border-b border-gray-300 ">
              <div className="flex flex-col">
                <span className="font-semibold">
                  Asuransi liabilitas $1 juta USD
                </span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Anda terlindungi apabila ada tamu yang terluka atau barang
                    milik tamu rusak atau dicuri.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 py-2">
            <div className="pb-4 w-full border-b border-gray-300 ">
              <div className="flex flex-col">
                <span className="font-semibold">
                  Hotline keselamatan 24 jam
                </span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Jika Anda merasa tidak aman, aplikasi kami menyediakan akses
                    sekali sentuh ke agen keselamatan yang dilatih khusus, kapan
                    pun Anda butuhkan.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-2 px-3 pb-8">
          <div className="px-2 py-2 mt-4 leading-tight">
            <span className="text-xl font-semibold leading-tight">
              Peningkatan tambahan untuk Tuan Rumah
            </span>
          </div>
          <div className="px-2 py-2">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
              <div className="flex flex-col justify-center items-center space-y-1 p-4 w-full border border-gray-600 rounded-md">
                <div className="py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-ballpen"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 6l7 7l-4 4"></path>
                    <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z"></path>
                    <path d="M4 20l1.768 -1.768"></path>
                  </svg>
                </div>
                <span className="font-semibold leading-tight">
                  Klaim mudah
                </span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                    Tuan Rumah kini bisa mengajukan klaim penggantian biaya
                    hanya dengan beberapa langkah mudah dan memantau statusnya.
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center space-y-1 p-4 w-full border border-gray-600 rounded-md">
                <div className="py-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path>
   <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
</svg>
                </div>
                <span className="font-semibold leading-tight">
                    Pembayaran Cepat
                </span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                  Tuan Rumah kini bisa memilih untuk menerima bayaran masuk ke kartu debit dalam 30 menit atau lebih cepat (hanya tersedia di AS).
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center space-y-1 p-4 w-full border border-gray-600 rounded-md">
                <div className="py-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx="12" cy="12" r="3"></circle>
   <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z"></path>
</svg>
                </div>
                <span className="font-semibold leading-tight">
                Personalisasi
                </span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                  Kategori yang kami perlihatkan kepada Anda kini makin relevan.
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center space-y-1 p-4 w-full border border-gray-600 rounded-md">
                <div className="py-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-details" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
   <path d="M12 3v16"></path>
</svg>
                </div>
                <span className="font-semibold leading-tight">
                Lebih detail
                </span>
                <div className="leading-tight">
                  <span className="text-gray-500 leading-tight text-sm">
                  Anda juga dapat melihat detail lebih lengkap setiap rumah saat menelusurinya.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide