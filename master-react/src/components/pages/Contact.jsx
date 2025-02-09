import React from 'react'

function Contact() {
    const contacts = [
        {
          icon: "/img/location.png",
          title: "موقعنا",
          text: "عمان، الأردن",
          bgColor: "bg-blue-500",
        },
        {
          icon: "/img/telephone.png",
          title: "تواصل معنا",
          text: "+962 79 0000 000",
          link: "tel://962790000000",
          bgColor: "bg-green-500",
        },
        {
          icon: "/img/envelope.png",
          title: "البريد الإلكتروني",
          text: "info@waynNrooh.com",
          link: "mailto:info@waynNrooh.com",
          bgColor: "bg-red-500",
        },
        {
          icon: "/img/web.png",
          title: "الموقع الإلكتروني",
          text: "waynNrooh.com",
          link: "#",
          bgColor: "bg-purple-500",
        },
      ];

  return (
 <div>
  {/* Hero Section */}
  <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('src/components/img/about.jpg" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-center text-white px-4">
          <h3 className="text-4xl font-bold mb-2">تواصل معنا </h3>
          <p className="text-lg text-beige">
          نسعد بالتواصل معكم ونسعى لتقديم تجارب استثنائية تمزج بين الشغف والمغامرة في أروع الوجهات الفريدة          </p>
        </div>
      </div>



       {/* section 1 */}

       <section className="ftco-section ftco-no-pb contact-section mb-4" dir="rtl">
    <div className="container">
        <div className="row flex contact-info">
            <div className="col-md-3 flex">
                <div className="align-self-stretch box p-4 text-center bg-gray-100">
                    <div className="icon flex items-center justify-center bg-blue-500 rounded-full w-24 h-24 mx-auto mb-3">
                        <img src="/img/location.png" alt="Location" className="icon-img w-12 h-12" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-blue-500">موقعنا</h3>
                    <p>عمان، الأردن</p>
                </div>
            </div>
            <div className="col-md-3 flex">
                <div className="align-self-stretch box p-4 text-center bg-gray-100">
                    <div className="icon flex items-center justify-center bg-blue-500 rounded-full w-24 h-24 mx-auto mb-3">
                        <img src="../img/telephone.png" alt="Phone" className="icon-img w-12 h-12" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-blue-500">تواصل معنا</h3>
                    <p><a href="tel://962790000000" className="text-gray-800">+962 79 0000 000</a></p>
                </div>
            </div>
            <div className="col-md-3 flex">
                <div className="align-self-stretch box p-4 text-center bg-gray-100">
                    <div className="icon flex items-center justify-center bg-blue-500 rounded-full w-24 h-24 mx-auto mb-3">
                        <img src="/img/envelope.png" alt="Email" className="icon-img w-12 h-12" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-blue-500">البريد الإلكتروني</h3>
                    <p><a href="mailto:info@wheretogo.com" className="text-gray-800">info@waynNrooh.com</a></p>
                </div>
            </div>
            <div className="col-md-3 flex">
                <div className="align-self-stretch box p-4 text-center bg-gray-100">
                    <div className="icon flex items-center justify-center bg-blue-500 rounded-full w-24 h-24 mx-auto mb-3">
                        <img src="/img/web.png" alt="Website" className="icon-img w-12 h-12" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-blue-500">الموقع الإلكتروني</h3>
                    <p><a href="#" className="text-gray-800">waynNrooh.com</a></p>
                </div>
            </div>
        </div>
    </div>
</section>



























    </div>
  )
}

export default Contact