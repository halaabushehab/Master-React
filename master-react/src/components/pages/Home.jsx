import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  // 🔹 الأنماط الداخلية
  const styles = {
    welcomeArea: {
      background: "url('https://www.angelplayground.com/uploadfile/userfiles/image/20230606/20230606125941_67130.png') no-repeat center center/cover",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      textAlign: "center",
      color: "#FFFFFF",
    },
    overlay: {
      background: "rgba(0, 44, 67, 0.7)",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    },
    heroContent: {
      position: "relative",
      zIndex: "2",
    },
    searchForm: {
      position: "relative",
      background: "#115173", // شفافية
      padding: "20px",
      borderRadius: "10px",
      width: "70%",
      margin: "auto",
      textAlign: "center",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    },
    formInner: {
      background: "#f9f9f9", // اللون الداخلي للنموذج
      padding: "15px",
      borderRadius: "8px",
    },
    button: {
      background: "#FFD700", // لون الزر
      color: "#000",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    categoryArea: {
      background: "#f8f9fa",
      padding: "50px 0",
      color: "#000000",
      textAlign: "center",
    },
    singleCategory: {
      background: "#115173",
      padding: "20px",
      borderRadius: "10px",
      transition: "0.3s",
      cursor: "pointer",
      color: "#FFFFFF",
    },
    singleCategoryHover: {
      background: "#FFD700",
      color: "#000",
    },
    button: {
      background: "#FFD700",
      border: "none",
      color: "#000",
      fontWeight: "bold",
      width: "100%",
      marginTop: "10px",
      padding: "10px",
    },
  
   
  };

  return (
    <>
      {/* ***** القسم الرئيسي ***** */}
      <section style={styles.welcomeArea}>
        <div style={styles.overlay}></div>
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-12 col-md-10">
              <div style={styles.heroContent}>
                <h2>وين نروح؟</h2>
                <h4>مع وين نروح، كل وجهة هي بداية لقصة جديدة</h4>
              </div>

              {/* 🔹 نموذج البحث */}
              <div style={styles.searchForm}>
                <h6>ما الذي تبحث عنه؟</h6>
                <form>
                  <select className="form-select my-2"  style={{ direction: "rtl" }}>
                    <option value="">اختر وجهتك</option>
                    <option value="عمان">عمان</option>
                    <option value="الزرقاء">الزرقاء</option>
                    <option value="اربد">إربد</option>
                    <option value="وادي رم">وادي رم</option>
                  </select>

                  <select className="form-select my-2"  style={{ direction: "rtl" }}>
                    <option value="">جميع التصنيفات</option>
                    <option value="عائلية">أماكن عائلية</option>
                    <option value="الأطفال">للأطفال</option>
                    <option value="الأصدقاء">مع الأصدقاء</option>
                    <option value="الرياضة">الأنشطة الرياضية</option>
                    <option value="الحدائق">الحدائق العامة</option>
                    <option value="التاريخية">المواقع التاريخية</option>
                  </select>

                  <select className="form-select my-2"  style={{ direction: "rtl" }}>
                    <option value="">نطاق الأسعار</option>
                    <option value="مجاني">مجانا</option>
                    <option value="أقل من 5">أقل من 5 دينار</option>
                    <option value="أكثر من 5">أكثر من 5 دينار</option>
                  </select>

                  <button type="submit" className="btn" style={styles.button}>
                    <i className="fa fa-search"></i> بحث
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***** قسم الفئات ***** */}
      <section style={styles.categoryArea}>
        <div className="container">
          {/* <h3>استكشف حسب الفئة</h3> */}
          <div className="row  justify-content-center">
            {[
              { name: "المتاحف", icon: "🏛️" },
              { name: "النوادي الرياضية", icon: "🏋️‍♂️" },
              { name: "المطاعم & المقاهي", icon: "🍽️" },
              { name: "أماكن أثرية", icon: "🏰" },
              { name: "الحدائق", icon: "🌳" },
            ].map((category, index) => (
              <div key={index} className="col-6 col-md-2 mb-3">
                <div
                  style={styles.singleCategory}
                  onMouseEnter={(e) => (e.currentTarget.style.background = styles.singleCategoryHover.background)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#115173")}
                  className="text-center"
                >
                  <h6 style={{ margin: "0" }}>{category.icon} {category.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
    {/* Categories Section Start */}
      <div className="container py-4" style={{ maxWidth: "900px" }}>
        <div className="text-center mb-4">
          <h2 className="display-5 fw-bold text-dark">اكتشف الفئات</h2>
          <p className="text-muted">استكشف الأماكن المميزة في الأردن حسب الفئة</p>
        </div>
        <div className="row g-4">
          {/* Category 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0">
              <img
                src="https://i.pinimg.com/736x/15/d5/bf/15d5bf42942e95ce5dc4a91c90334481.jpg"
                className="card-img-top"
                alt="أماكن طبيعية"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">أماكن تصوير</h5>
                <p className="card-text text-muted">
                  استمتع بالطبيعة الخلابة والمواقع الطبيعية  .
                </p>
                <a href="#" className="btn" style={{ backgroundColor: "#115173", color: "#FFD700" }}>
                  استكشف الآن
                </a>
              </div>
            </div>
          </div>
          {/* Category 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0">
              <img
                src="https://i.pinimg.com/736x/15/d5/bf/15d5bf42942e95ce5dc4a91c90334481.jpg"
                className="card-img-top"
                alt="مواقع تاريخية"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">مواقع تاريخية</h5>
                <p className="card-text text-muted">
                  اكتشف تاريخ الأردن من خلال المواقع الأثرية .
                </p>
                <a href="#" className="btn" style={{ backgroundColor: "#115173", color: "#FFD700" }}>
                  استكشف الآن
                </a>
              </div>
            </div>
          </div>
          {/* Category 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0">
              <img
                src="https://i.pinimg.com/736x/15/d5/bf/15d5bf42942e95ce5dc4a91c90334481.jpg"
                className="card-img-top"
                alt="الترفيه"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">الترفيه</h5>
                <p className="card-text text-muted">
                  أماكن مليئة بالمرح والترفيه لجميع الأعمار.
                </p>
                <a href="#" className="btn" style={{ backgroundColor: "#115173", color: "#FFD700" }}>
                  استكشف الآن
                </a>
              </div>
            </div>
          </div>
          {/* Category 4 */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0">
              <img
                src="https://i.pinimg.com/736x/15/d5/bf/15d5bf42942e95ce5dc4a91c90334481.jpg"
                className="card-img-top"
                alt="مطاعم ومقاهي"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">مطاعم ومقاهي</h5>
                <p className="card-text text-muted">
                  استمتع بتجارب طعام رائعة في أفضل الأماكن.
                </p>
                <a href="#" className="btn" style={{ backgroundColor: "#115173", color: "#FFD700" }}>
                  استكشف الآن
                </a>
              </div>
            </div>
          </div>
          {/* Category 5 */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0">
              <img
                src="https://i.pinimg.com/736x/15/d5/bf/15d5bf42942e95ce5dc4a91c90334481.jpg"
                className="card-img-top"
                alt="عائلية"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">أنشطة عائلية</h5>
                <p className="card-text text-muted">
                  أماكن ممتعة تناسب جميع أفراد العائلة.
                </p>
                <a href="#" className="btn" style={{ backgroundColor: "#115173", color: "#FFD700" }}>
                  استكشف الآن
                </a>
              </div>
            </div>
          </div>
          {/* Category 6 */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-sm border-0">
              <img
                src="https://i.pinimg.com/736x/15/d5/bf/15d5bf42942e95ce5dc4a91c90334481.jpg"
                className="card-img-top"
                alt="تسوق"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">أسواق وتسوق</h5>
                <p className="card-text text-muted">
                  استمتع بأجمل الأسواق والمراكز التجارية  .
                </p>
                <a href="#" className="btn" style={{ backgroundColor: "#115173", color: "#FFD700" }}>
                  استكشف الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Categories Section End */}
 {/* About Start */}
 <div className="container-xxl py-5">
      <div className="container section-wrapper">
        <div className="row g-5 align-items-center justify-content-center flex-row-reverse">
          {/* النصوص */}
          <div className="col-lg-5 wow fadeIn text-right" data-wow-delay="0.5s">
            <h4 className="section-title">عن وين نروح؟</h4>
            <h1 className="display-6 mb-3">اكتشف أجمل الأماكن والأنشطة في الأردن بسهولة</h1>
            <p>
              تُعد منصة "وين نروح" دليلك الشامل لاستكشاف الوجهات السياحية والترفيهية المميزة في الأردن. نقدم معلومات مفصلة عن الأماكن التي تناسب العائلات، الأصدقاء، الأطفال، وحتى الأفراد، لتستمتع بأوقات لا تُنسى.
            </p>
            <p className="mb-4">
              من الحدائق والمتنزهات إلى المطاعم والأسواق المحلية، نساعدك في العثور
              على أفضل الخيارات بناءً على موقعك واهتماماتك. المنصة تجمع بين
              التقييمات، المراجعات، وتفاصيل مثل ساعات العمل، الأعمار المناسبة، والتكاليف.
            </p>
            <div className="d-flex align-items-center justify-content-end mb-4">
            <div
  className="counter-box border border-5 d-flex align-items-center justify-content-center"
  style={{ borderColor: "#022C43" }}
>
  <h1 className="display-1 mb-0" id="destination-counter">100</h1>
</div>
              <div className="ps-3">
                <h3>وجهة</h3>
                <h3 style={{ marginRight: 10 }}>تم إدراجها</h3>
              </div>
            </div>
            


<a
  className="btn"
  href="contact/contactUs.html"
  style={{
    backgroundColor: "#115173", // لون الخلفية
    color: "#FFD700", // لون النص
    padding: "0.5rem 1rem", // ضبط الحشوة (padding)
    border: "none", // إزالة الحدود
    borderRadius: ".5rem" // توازن الزاوية
  }}
>
  اقرأ المزيد
</a>          </div>
          {/* الصور */}
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <img
                className="img-fluid rounded main-img"
                src="https://i.pinimg.com/736x/e8/d6/85/e8d6850faff592b9f169b3dcc7a7c539.jpg"
                alt="الأردن"
              />
              <img
                className="img-fluid rounded small-img"
                src="https://scontent.famm13-1.fna.fbcdn.net/v/t1.6435-9/74791447_426415758045651_706926972399255552_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=ODpqazqWjB8Q7kNvgHrYeGF&_nc_zt=23&_nc_ht=scontent.famm13-1.fna&_nc_gid=AcXClvlkXpIt0pSUtQtdEvL&oh=00_AYDDk6I6L1qHneiGJQwaG5eo9oarNsZ3Lb4l1axQ_iCuAg&oe=67BF4FD3"
                alt="نشاطات"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CSS داخلي */}
      <style jsx>{`
        .about-img {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        
          height: auto;
        }

        .about-img img {
          width: 50%;
          height: auto;
          object-fit: cover;
          border: 5px solid #d4a373;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          position: relative;
          transition: transform 0.3s ease-in-out;
        }

        .about-img img:first-child {
          transform: translate(-20px, 20px);
          z-index: 1;
        }

        .about-img img:last-child {
          transform: translate(20px, -20px);
          z-index: 0;
        }

        .about-img img:hover {
          transform: scale(1.05);
        }



        .about-img img.main-img {
          top: 0;
          left: 0;
          z-index: 0;
        }

        .about-img img.small-img {
          top: 40px; /* تحريك الصورة الثانية إلى الأسفل */
          right: 100px; /* تحريك الصورة الثانية إلى اليمين */
          z-index: 1;
        }

        .about-img img:hover {
          transform: scale(1.05);
        }


        /* استعلامات الإعلام للهواتف */
        @media (max-width: 768px) {
          .about-img {
            flex-direction: column;
            gap: 15px;
          }

          .about-img img {
            width: 100%;
            margin: 0 auto;
            transform: none;
          }
        }

        /* إضافة أنماط لشريط العدّاد */
        #destination-counter {
          font-size: 3rem;
        }
      `}</style>
    </div>
      {/* About End */}


      {/* reason start */}

    <div className="untree_co-section" >
    <div className="container" >
      <div className="row justify-content-center text-center mb-5" >
        <div className="col-lg-6">
          <h2 className="section-title text-center mb-3" >
            أفضل الوجهات السياحية في الأردن حسب الفصول
          </h2>
          <p>
            اكتشف أجمل الوجهات السياحية في الأردن التي يمكنك زيارتها في كل فصل
            من فصول السنة. اختر الفصل المناسب واستمتع بتجارب فريدة تناسب كل
            موسم.
          </p>
        </div>
      </div>
      <div className="row"  >
        {/* فصل الصيف */}
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0"  style={{ direction: "rtl" }}>
          <div className="media-1">
            <a href="#" className="d-block mb-3">
              <img
                src="https://alqalahnews.net/assets/2020-07-19/news_gallery/254627_7_1595149938.jpg"
                alt="الصيف في الأردن"
                className="img-fluid"
              />
            </a>
            <span className="d-flex align-items-center loc mb-2 text-right">
              <span className="icon-room mr-3" />
              <span>الصيف</span>
            </span>
            <div className="d-flex align-items-center text-right">
              <div>
                <h3>
                  <a href="./reason/features_1.html"  style={{ color: "#115173", textDecoration: "none" }}>وجهات الصيف في الأردن</a>
                </h3>
                <p>
                  استمتع بزيارة المناطق المرتفعة مثل عجلون والشفا حيث الطقس
                  اللطيف والطبيعة الخضراء. أو قم بزيارة العقبة للاستمتاع
                  بالشواطئ والأنشطة المائية.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* فصل الشتاء */}
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0"  style={{ direction: "rtl" }}>
          <div className="media-1">
            <a href="#" className="d-block mb-3">
              <img
                src="https://i.pinimg.com/736x/b9/bd/fb/b9bdfba6a360e2b83e77bebee7ee6cbf.jpg"
                alt="الشتاء في الأردن"
                className="img-fluid"
              />
            </a>
            <span className="d-flex align-items-center loc mb-2 text-right">
              <span className="icon-room mr-3" />
              <span>الشتاء</span>
            </span>
            <div className="d-flex align-items-center text-right">
              <div>
                <h3>
                <a href="./reason/features_1.html" style={{ color: "#115173", textDecoration: "none" }}>
  وجهات الشتاء في الأردن
</a>                </h3>
                <p>
                  الشتاء هو الوقت المثالي لزيارة المناطق الدافئة مثل البحر الميت
                  حيث يمكنك الاسترخاء والاستفادة من الخصائص العلاجية. كما يمكنك
                  زيارة وادي عربة للاستمتاع بالطقس المعتدل.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* فصل الربيع */}
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0"  style={{ direction: "rtl" }}>
          <div className="media-1">
            <a href="#" className="d-block mb-3">
              <img
                src="https://alqalahnews.net/assets/2020-07-19/news_gallery/254627_7_1595149938.jpg"
                alt="الربيع في الأردن"
                className="img-fluid"
              />
            </a>
            <span className="d-flex align-items-center loc mb-2 text-right">
              <span className="icon-room mr-3" />
              <span>الربيع</span>
            </span>
            <div className="d-flex align-items-center text-right">
              <div>
                <h3>
                  <a href="./reason/features_1.html"  style={{ color: "#115173", textDecoration: "none" }}>وجهات الربيع في الأردن</a>
                </h3>
                <p>
                  استمتع بجمال الطبيعة في الربيع مع زيارة مناطق مثل جرش والبتراء
                  حيث الأزهار تتفتح والطقس معتدل. يمكنك أيضاً استكشاف المحميات
                  الطبيعية مثل محمية ضانا.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* فصل الخريف */}
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0"  style={{ direction: "rtl" }}>
          <div className="media-1">
            <a href="#" className="d-block mb-3">
              <img
                src="https://i.pinimg.com/736x/96/66/79/9666795c840ecea0114e78a37e150bf9.jpg"
                alt="الخريف في الأردن"
                className="img-fluid"
              />
            </a>
            <span className="d-flex align-items-center loc mb-2 text-right">
              <span className="icon-room mr-3" />
              <span>الخريف</span>
            </span>
            <div className="d-flex align-items-center text-right">
              <div>
                <h3>
                  <a href="./reason/features_1.html" style={{ color: "#115173", textDecoration: "none" }} >وجهات الخريف في الأردن</a>
                </h3>
                <p>
                  الخريف هو الوقت المثالي لزيارة المناطق الصحراوية مثل وادي رم
                  حيث الطقس لطيف ومناسب للمغامرات. يمكنك أيضاً استكشاف القرى
                  التراثية مثل أم الرصاص.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* CSS داخلي */}
  <style jsx>{`
  .untree_co-section {
    padding: 2rem 0;
    // height: 600px; /* تحديد الارتفاع */
  }

  .media-1 {
    transition: transform 0.3s ease-in-out;
  }

  .media-1:hover {
    transform: scale(1.05);
  }

  .media-1 img {
    border-radius: 10px;
    width: 100%;
    height: 450px;
  }

  .loc {
    direction: rtl;
  }

  @media (max-width: 768px) {
    .untree_co-section {
      padding: 1rem 0;
      height: auto; /* للسماح بتمدد المحتوى في الشاشات الصغيرة */
    }
  }
`}</style>
      {/* reason start */}






</>
  );
};

export default Home;