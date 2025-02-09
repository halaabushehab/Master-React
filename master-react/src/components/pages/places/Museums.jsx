import React from "react";

const arr = [
  {
    title: "متحف ألف اختراع واختراع",
    imageUrl: "https://assets.nn.najah.edu/CACHE/images/uploads/weblog/2017/03/31/faae1cb1ec/0331491da6b91d195b61fb927589d05c.jpg",
    description: "متحف تفاعلي يستعرض إنجازات الحضارة الإسلامية في مجالات العلوم، التكنولوجيا، والفنون، مسلطًا الضوء على إسهامات العلماء المسلمين في تطوير العالم.",
    price: "سعر الدخول: حسب الفعالية",
    season:"winter❄️",
  },
  {
    title: "متحف السيارات الملكي",
    imageUrl: "https://i.pinimg.com/736x/2f/6a/ab/2f6aab9827f30101ade0c73dd64a6302.jpg",
    description: "يعرض متحف السيارات الملكي مجموعة مميزة من السيارات التاريخية التي تعكس تاريخ المملكة الأردنية الهاشمية، بما في ذلك سيارات استخدمها ملوك الأردن في مناسبات رسمية وتاريخية.",
    price: "سعر الدخول: 3 دنانير",
    season:"fall🍂",
    },
  {
    title: "متحف أم قيس",
    imageUrl: "https://museums.visitjordan.com/uploads/museums/images/e1a1248d-d8cf-45cd-8036-73428475cf87.jpg",
    description: "يعرض متحف أم قيس مجموعة من القطع الأثرية التي تعود للعصور اليونانية والرومانية والبيزنطية، ويتميز بموقعه الذي يوفر إطلالة رائعة على بحيرة طبريا وهضبة الجولان.",
    price: "سعر الدخول: 3 دنانير",
    season:"spring🌼",

  },
  {
    title: "متحف الشمع في الأردن",
    imageUrl: "https://museums.visitjordan.com/uploads/museums/images/f7420392-a4fd-4331-8170-a13cc1048674.jpg",
    description: "يضم متحف الشمع في الأردن تماثيل شمعية لشخصيات تاريخية وثقافية بارزة من مختلف العصور، مما يوفر تجربة تفاعلية مميزة تُمكّن الزوار من التعرف على هذه الشخصيات.",
    price: "سعر الدخول: 3 دنانير",
    season:"winter❄️",

  },
  {
    title: "معرض بانوراما عمّان للفنون",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/98/3a/f7/amman-panorama-art-gallery.jpg?w=1200&h=-1&s=1",
    description: "يقدم معرض بانوراما عمّان للفنون مجموعة متنوعة من الأعمال الفنية المعاصرة التي تعكس الإبداع المحلي والعالمي، ويعد منصة هامة لدعم الفنانين الأردنيين واستكشاف الفنون الحديثة.",
    price: "سعر الدخول: مجاني",
    season:"fall🍂",

  },
  {
    title: "متحف التاريخ الطبيعي في الأردن",
    imageUrl: "https://www.yu.edu.jo/images/YUNN/news/IMG_9298.JPG",
    description: "يعرض متحف التاريخ الطبيعي في الأردن تنوع الحياة البرية والنباتية في المملكة، ويضم مجموعة واسعة من الأحافير والهياكل العظمية والكائنات المحنطة التي تعكس التنوع في المنطقة.",
    price: "سعر الدخول: 3 دنانير",
    season:"summer🌞",

  }
];

const Museums = () => {
  
  return (
    <>
  {/* MUSEUM START */}
<section className="museums-section">
  <div className="container" style={{ marginTop: 100, position: "relative", zIndex: 2 }}>
    <h1 className="text-white text-center mb-5" style={{
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#fff",
      fontFamily: "var(--font-family-titel)"
    }}>المتاحف</h1>
    <div className="search-favorite d-flex justify-content-between align-items-center mb-4" style={{ marginBottom: "20px" }}>
      <div className="search-bar" style={{ marginLeft: "auto" }}>
        <input
          type="text"
          className="form-control"
          placeholder="ابحث عن المتحف"
          id="searchInput"
          style={{
            borderRadius: "5px",
            padding: "10px",
            border: "1px solid #ddd",
            width: "100%", // جعل العرض 100% ليتناسب مع الشاشات الصغيرة
            maxWidth: "300px" // عرض أقصى لضمان عدم التمدد
          }}
        />
      </div>
    </div>
    <div className="row" id="museumCards" style={{ justifyContent: "center", width: "100%", alignItems: "center" }}>
      {/* البطاقات هنا */}
      {arr.map((museum, index) => (
        <div className="col-md-4 col-sm-6 mb-4" key={index}> {/* تغيير هنا لتكون البطاقة أكثر استجابة */}
          <div className="product-card" style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            transition: "transform 0.3s, box-shadow 0.3s",
            position: "relative",
            maxWidth: "300px",
            height:"550px",
            margin: "auto"
          }}>
            <span style={{
              backgroundColor: "rgba(255, 193, 7, 0.8)",
              color: "#000",
              padding: "5px 10px",
              borderRadius: "10px",
              position: "absolute",
              top: "10px",
              left: "10px",
              zIndex: 1
            }}>{museum.season}</span>

            <img
              src={museum.imageUrl}
              alt={museum.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div className="card-body" style={{ padding: "15px", textAlign: "center" }}>
              <h3 className="card-title" style={{ fontSize: "1.5em", margin: "10px 0", color: "#333" }}>
                {museum.title}
              </h3>
              <div style={{ color: "#666", margin: "10px 0", fontSize: "0.9em" }}>
                📍 الموقع
              </div>
              <p className="card-text" style={{ color: "#666", margin: "10px 0" }}>
                {museum.description}
              </p>
              <div className="price" style={{ fontWeight: "bold", margin: "10px 0", color: "#e74c3c" }}>
                {museum.price}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderTop: "1px solid #ddd" }}>
              <a href="favorite" target="_blank" style={{
                cursor: "pointer",
                color: "#FFD700",
                fontSize: "2rem"
              }}>
                <i className="bx bx-heart-circle"></i>
              </a>
              <a
                href="more-details.html"
                className="btn btn-primary"
                style={{
                  backgroundColor: "rgb(17, 81, 115)",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px"
                }}
              >
                المزيد
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
  <div style={{
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1
  }}></div>
</section>

<style jsx>{`
  .museums-section {
    padding: 100px 0; /* لضمان البعد عن الـ nav */
    position: relative;
    background-image: url('https://i.pinimg.com/736x/df/51/0b/df510b0f6a90123515b2e77d1ef45416.jpg'); /* صورة الخلفية */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 200vh; /* لإبقاء الصورة ثابتة */
  }

  /* Media Query لتعديل الارتفاع على الشاشات الصغيرة */
  @media (max-width: 768px) {
    .museums-section {
      height: 650vh; /* زيادة الارتفاع إلى 350vh */
    }

    h1 {
      font-size: 2rem; /* تصغير حجم العنوان */
    }

    .search-bar {
      max-width: 100%; /* جعلها تأخذ العرض الكامل */
    }

    .product-card {
      max-width: 90%; /* جعل عرض الكارد أكبر على الشاشات الصغيرة */
    }
  }

  @media (max-width: 576px) {
    .product-card {
      max-width: 100%; /* جعل عرض الكارد 100% على الشاشات الأصغر */
    }

    h1 {
      font-size: 1.8rem; /* تصغير حجم العنوان أكثر */
    }

    .card-title {
      font-size: 1.3em; /* تصغير حجم العنوان داخل الكارد */
    }
  }
`}</style>
{/* end */}
 
 


<>
<div className="container mt-5">
      <div className="content-container">
        {/* كارد المعلومات */}
        <div className="info-card">
          <h2 className="text-center mb-3">متحف السيارات الملكي</h2>
          <p className="text-center text-muted">عمان - دابوق</p>
          <div className="rating mb-3 text-center">
            <i className="fas fa-star" /> 4.5
          </div>
          <div className="about mb-3">
            <h3 className="text-center">عن المتحف</h3>
            <p>
              بعد افتتاح الملكي للسيارات أول متحف من السيارات في العالم العربي
              افتتحه سمو ولي العهد الأمير عبدالله بن عبدالعزيز في عام 2003. ويضم
              هذا المتحف 60 سيارة كلاسيكية رائعة تمثل المراحل المختلفة لتطور
              السيارات. ويرتبط تاريخها بتطور المملكة العربية السعودية.
            </p>
          </div>
          <div className="details">
            <div className="detail">
              <h4>التذاكر</h4>
              <p>2.00 دينار أردني</p>
            </div>
            <div className="detail">
              <h4>ساعات العمل</h4>
              <p>10:00 صباحًا - 6:00 مساءً</p>
            </div>
            <div className="detail">
              <h4>الموقع</h4>
              <p>الموقع الجغرافي</p>
            </div>
          </div>
          <div className="map-button mb-3 text-center">
            <a href="#" className="btn btn-primary">
              الخريطة التفاعلية
            </a>
          </div>
        </div>

        {/* حاوية الصور */}
        <div className="image-container">
          <div className="main-image">
            <img
              src="https://i.pinimg.com/736x/c6/60/e3/c660e35086e333926e0e652f13591e07.jpg"
              alt="سيارة"
              className="img-fluid main-car"
            />
          </div>
          <div className="small-images">
            <img
              src="https://i.pinimg.com/736x/22/b5/62/22b56275e69073d2f4d297e91fa9a70a.jpg"
              alt="سيارة"
              className="img-fluid smaller-car"
            />
            <img
              src="https://i.pinimg.com/736x/65/9b/0d/659b0d02d522f43426f1c4f7becd0b96.jpg"
              alt="سيارة"
              className="img-fluid smaller-car"
            />
          </div>
        </div>
      </div>

      {/* معرض السيارات */}
      <div className="container py-5">
        <h2
          className="text-center mb-4"
          style={{ color: "#11374d", fontWeight: "bold" }}
        >
          معرض السيارات
        </h2>
        <div className="row justify-content-center">
          {[
            "https://i.pinimg.com/736x/c6/60/e3/c660e35086e333926e0e652f13591e07.jpg",
            "https://i.pinimg.com/736x/32/65/9f/32659f36d33bc72a545ff329af249a61.jpg",
            "https://i.pinimg.com/736x/76/8c/9d/768c9debaedddf159a0a9cf7c4bd313a.jpg",
            "https://i.pinimg.com/736x/43/f1/de/43f1de4b0f447b272d15ffbe20090da1.jpg",
            "https://i.pinimg.com/736x/42/2b/69/422b694693278f84f80e8967bd8a5531.jpg"
          ].map((src, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="img-container">
                <img src={src} alt={`Car ${index + 1}`} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* حول المكان */}
      <div className="container mt-5">
        <h1 style={{ color: "#11374d", textAlign: "center" }}>حول المكان</h1>
        <div className="options text-center">
          <div className="option" data-url="../reason/checkOut.html">
            شراء التذكرة
          </div>
          <div className="option" data-info="الأماكن القريبة">
            الأماكن القريبة
          </div>
          <div className="option" data-info="الفصل المناسب للزيارة">
            أفضل وقت للزيارة
          </div>
          <div className="option" data-info="معلومات عن ملاعب">
            ارفق مكان مماثل
          </div>
          <div className="option" data-info="معلومات عن مقاوم">
            المزيد
          </div>
        </div>
        <div className="rating-section text-center">
          <h3>قيم الموقع:</h3>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span className="star" key={star} data-value={star}>
                ★
              </span>
            ))}
          </div>
          <div id="rating-result">لم تقيم بعد</div>
        </div>
      </div>

      {/* النوافذ المنبثقة (Alert) لمعلومات المكان */}
      {/* <div className="overlay" />
      <div className="alert-box">
        <h2>تفاصيل المكان</h2>
        <p id="info-text">هنا ستظهر التفاصيل الخاصة بالمكان.</p>
        <button onClick={() => closeAlert()}>إغلاق</button>
      </div> */}

      {/* CSS داخلي */}
      <style jsx>{`
        .content-container {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          flex-direction: row-reverse;
        }

        .info-card {
          flex: 1.5;
          background: #11374d;
          color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .info-card h2 {
          font-size: 1.8em;
          color: #FFD700;
        }

        .rating {
          color: #FFD700;
          font-size: 1.2em;
        }

        .details {
          margin-top: 20px;
        }

        .details .detail {
          margin-bottom: 15px;
        }

        .details h4 {
          margin-bottom: 5px;
          font-size: 1.1em;
          color: #FFD700;
        }

        .map-button .btn {
          background-color: #FFD700;
          color: #000;
          border: none;
          font-weight: bold;
        }

        .map-button .btn:hover {
          background-color: #FFA500;
        }

        .image-container {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .main-image img {
          width: 90%;
          height: 350px;
          border-radius: 15px;
          border: 1px solid #FFD700;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .main-image img:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .small-images {
          display: flex;
          gap: 10px;
          width: 90%;
        }

        .small-images img {
          flex: 1;
          height: 150px;
          border: 1px solid #FFD700;
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .small-images img:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .img-container {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .img-container img {
          width: 100%;
          height: auto;
          transition: transform 0.4s ease, opacity 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.1); /* الإطار الخفيف */
        }

        .img-container:hover img {
          transform: scale(1.05);
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
          }

          .small-images {
            flex-direction: row;
          }
        }

        @media (max-width: 480px) {
          .content-container {
            gap: 20px;
          }

          .info-card {
            padding: 15px;
          }

          .info-card h2 {
            font-size: 1.3em;
          }

          .rating {
            font-size: 0.9em;
          }

          .details h4 {
            font-size: 0.9em;
          }

          .main-image img {
            height: 200px;
          }

          .small-images img {
            height: 60px;
          }
        }

        .options {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .option {
          cursor: pointer;
          padding: 15px 20px;
          margin: 10px;
          background-color: #FFD700;
          border-radius: 8px;
          text-align: center;
          font-family: 'Arial', sans-serif;
          font-size: 18px;
          color: #11374d;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .option:hover {
          background-color: #FFA500;
          transform: scale(1.05);
        }

        .rating-section {
          margin-top: 40px;
          text-align: center;
          font-family: 'Arial', sans-serif;
          color: #11374d;
        }

        .star-rating {
          font-size: 30px;
          cursor: pointer;
        }

        .star {
          margin: 0 5px;
          color: gray;
          transition: color 0.3s;
        }

        #rating-result {
          margin-top: 10px;
          font-size: 18px;
        }
      `}</style>
    </div>
</>











    </>
  );
};

export default Museums;