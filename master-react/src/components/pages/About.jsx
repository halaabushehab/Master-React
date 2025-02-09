import React, { useEffect, useState } from "react";
// import videoSrc from '../img/amman-vedio.mp4'; // تأكد من المسار الصحيح




function About() {

    const [counts, setCounts] = useState({ counter1: 0, counter2: 0, counter3: 0 });

    useEffect(() => {
      const targetValues = { counter1: 500, counter2: 200, counter3: 1000 }; // القيم المستهدفة
      const duration = 2000; // مدة العداد
  
      Object.keys(targetValues).forEach((key) => {
        let start = 0;
        const increment = targetValues[key] / (duration / 50);
  
        const interval = setInterval(() => {
          start += increment;
          if (start >= targetValues[key]) {
            start = targetValues[key];
            clearInterval(interval);
          }
          setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
        }, 50);
      });
    }, []);



    const travelData = [
        {
          icon: "src\components\img\telephone.jpg",
          title: "رحلة مريحة",
          description: "تجربة رائعة في استكشاف أماكن غير مشهورة في الأردن.",
        },
        {
          icon: "src\components\img\location.jpg",
          title: "فنادق فاخرة",
          description: "تجربة إقامة مريحة في أماكن هادئة وجميلة.",
        },
        {
          icon: "src\components\img\web.jpg",
          title: "دليل السفر",
          description: "مساعدتك في اكتشاف الكنوز المخفية في الأردن.",
        },
      ];
    

      const testimonials = [
        {
          name: "أحمد الصالح",
          role: "مسافر مغامر",
          image: "https://i.pinimg.com/736x/e6/21/9b/e6219b93a72b6376e381a454cf366df9.jpg",
          text: "تجربة مذهلة! اكتشفت أماكن لم أكن أعرفها في الأردن واستمتعت كثيرًا.",
        },
        {
          name: "ليلى عبد الله",
          role: "مستكشفة",
          image: "https://i.pinimg.com/736x/93/79/d2/9379d261dfd39d582b0dc96a09f8a324.jpg",
          text: "الموقع رائع وسهل الاستخدام، ساعدني في التخطيط لرحلتي بكل سهولة!",
        },
        {
          name: "خالد العتيبي",
          role: "مسافر عائلي",
          image: "https://i.pinimg.com/736x/3d/1f/3c/3d1f3c3be9ae71b3d2d09c04d610c58c.jpg",
          text: "أفضل منصة لاكتشاف أماكن جديدة! أنصح بها الجميع.",
        },
      ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('src/components/img/about.jpg" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 text-center text-white px-4">
          <h3 className="text-4xl font-bold mb-2">من نحن</h3>
          <p className="text-lg text-beige">
            نحن ملتزمون بتقديم تجارب استثنائية تجمع بين الشغف والمغامرة في أماكن فريدة.
          </p>
        </div>
      </div>



{/* section 1 */}

<section className="bg-gray-100 py-8 flex flex-col items-center w-4/5 mx-auto overflow-hidden max-h-[600px] p-5 md:p-10">
      <style>
        {`
          .img-container {
            border: 5px solid transparent;
            transition: transform 0.3s, border-color 0.3s;
            width: 100%;
            max-width: 400px;
            margin-bottom: 10px;
            height: 500px;
            overflow: hidden;
            margin-right: 10px;
          }
          
          .img-container:hover {
            transform: scale(1.05);
            border-color: yellow;
            border-style: solid;
          }
          
          @media (max-width: 768px) {
            .vision {
              max-height: none;
              padding: 10px;
            }
          }
        `}
      </style>

      <div className="flex flex-col md:flex-row items-center w-full">
        {/* صورة */}
        <div className="md:w-1/2 flex justify-center">
          <div className="img-container">
            <img
              src="https://i.pinimg.com/736x/91/a7/13/91a713753af5b86e75f4b1a337def119.jpg"
              alt="صورة"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* النص */}
        <div className="md:w-1/2 text-gray-800 text-right">
          <h4 className="text-4xl font-bold text-[#2f5c8a] mt-2">قصتنا</h4>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            لم يكن "وين نروح" مجرد فكرة سياحية للتعرف على الأماكن الشهيرة، بل هو دليل للمواطنين لاكتشاف الأماكن الغير
            معروفة والمميزة التي تستحق الزيارة. نشأت فكرتنا من تجارب شخصية، حيث اكتشفنا صدفة أماكن رائعة لم نكن نسمع
            عنها من قبل، وكانت تلك الأماكن مفيدة للأطفال ومثالية للطلعات مع العائلة والأصدقاء.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            نحن من سكان محافظة أخرى، وعندما نزور عمان غالبًا نجد أنفسنا محدودين بالأماكن والمطاعم المعروفة. لكننا نعلم
            جيدًا أن هناك جواهر مخفية تنتظر من يكتشفها، أماكن توفر أجواء مميزة وتفاصيل مثل تكلفة الزيارة تساعدكم على
            التخطيط لطلعتكم بكل سهولة.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            هدفنا أن نكون رفيقكم في رحلة الاستكشاف، وأن نقدم لكم دليلًا عمليًا يساعدكم على العثور على تلك الأماكن الرائعة
            التي تُضفي على كل طلعة تجربة فريدة وممتعة.
          </p>
        </div>
      </div>
    </section>

{/* section 2 */}
<div className="w-4/5 mx-auto py-10 text-right">
      <style>
        {`
          .single-counter {
            border: 2px solid #2f5c8a;
            border-radius: 10px;
            padding: 20px;
            background-color: #f9f9f9;
            transition: background-color 0.3s;
          }
          
          .single-counter:hover {
            background-color: #e0f7fa;
          }
        `}
      </style>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* جولة تمت بنجاح */}
        <div className="single-counter flex flex-col items-center p-6">
          <h3 className="text-5xl font-bold text-[#2f5c8a]">{counts.counter1}</h3>
          <p className="text-lg text-gray-700">جولة تمت بنجاح</p>
        </div>

        {/* جولات سنوية مرتبة */}
        <div className="single-counter flex flex-col items-center p-6">
          <h3 className="text-5xl font-bold text-[#2f5c8a]">{counts.counter2}</h3>
          <p className="text-lg text-gray-700">جولات سنوية مرتبة</p>
        </div>

        {/* عملاء سعداء */}
        <div className="single-counter flex flex-col items-center p-6">
          <h3 className="text-5xl font-bold text-[#2f5c8a]">{counts.counter3}</h3>
          <p className="text-lg text-gray-700">عملاء سعداء</p>
        </div>
      </div>
    </div>

{/* section 3 */}

<section className="relative w-full h-screen bg-gray-100 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
  <source src="/assets/amman-video.mp4" type="video/mp4" />
  </video>

  {/* تراكب شفاف لإضاءة النص */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* محتوى الفيديو */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
    <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
      استمتع بالفيديو
    </h2>
    <p className="mt-2 text-lg md:text-xl drop-shadow-md">
      انغمس في تجربة بصرية لا تُنسى.
    </p>
    <a
      href="#"
      className="mt-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-2xl shadow-lg transition-transform duration-300 hover:scale-110"
    >
      ▶
    </a>
  </div>
</section>

{/* section 4 */}
<div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            >
              <div className="mb-4 flex justify-center">
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* section 5 */}
    <div className="bg-yellow-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          ماذا يقول مستخدمونا؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
            >
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-400 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );



}

export default About;
