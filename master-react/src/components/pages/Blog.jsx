import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

const callouts = [
  {
    name: "اكتشاف وجهة جديدة: الحديقة اليابانية في عمّان",
    description: "اكتشفوا روعة الحديقة اليابانية في عمّان، وجهة ساحرة تمزج بين الهدوء والطبيعة الخلابة. استمتعوا بتصميمها المستوحى من الثقافة اليابانية وتجاربها التي تناسب جميع الأعمار.",
    imageSrc: "https://static.hiamag.com/styles/autox754/public/article/26/02/2018/6567941-1854611281.jpg",
    imageAlt: "صورة المقال",
    date: "15 يناير",
    tags: ["حدائق", "ثقافة"],
    href: "/blog-details/1", // رابط صفحة التفاصيل
  },
  {
    name: "استكشاف قلعة عجلون: تاريخ وحكايات من العصور الوسطى",
    description: "قلعة عجلون، إحدى أبرز القلاع التاريخية في الأردن، تتمتع بإطلالات ساحرة على وادي عجلون والمناطق المحيطة بها. تم بناؤها في القرن الثاني عشر بهدف الدفاع ضد الهجمات الصليبية.",
    imageSrc: "https://i.pinimg.com/736x/4b/a8/61/4ba861312c84b4087009e5aae8b6ceed.jpg",
    imageAlt: "صورة قلعة عجلون",
    date: "15 يناير",
    tags: ["سياحة", "تاريخ"],
    href: "/blog-details/2", // رابط صفحة التفاصيل
  },
  {
    name: "أهمية الترويح عن النفس: قضاء وقت ممتع مع أطفالك",
    description: "في ظل ضغوط الحياة اليومية، يصبح الخروج والترويح عن النفس مع الأطفال فرصة ذهبية لتقوية الروابط العائلية وتحقيق التوازن النفسي.",
    imageSrc: "https://www.family.abbott/content/dam/an/familyabbott/jo-ar/abbott-family/FAM_Jordan%20homepage%20banner.jpg",
    imageAlt: "صورة المقال",
    date: "20 يناير",
    tags: ["عائلة", "ترفيه"],
    href: "/blog-details/3", // رابط صفحة التفاصيل
  },
  {
    name: "متحف ألف مخترع ومخترع: أفضل وجهة تعليمية للأطفال في الأردن",
    description: "إذا كنت تبحث عن مكان يجمع بين التعلم والترفيه للأطفال، فإن متحف \"ألف مخترع ومخترع\" هو الخيار المثالي.",
    imageSrc: "https://www.arabtravelers.com/wp-content/uploads/2023/05/1_5-1.jpg",
    imageAlt: "صورة المقال",
    date: "20 يناير",
    tags: ["تعليم", "أطفال"],
    href: "/blog-details/4", // رابط صفحة التفاصيل
  }
  ,
 
 
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = callouts.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(callouts.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container my-5" style={{ direction: 'rtl' }}>
      {/* Hero Section */}
      <section className="container-fluid position-relative text-center text-white mb-4" style={{ minHeight: '30vh' , backgroundColor:"#115173"  }}>
        {/* <img
          src="https://i.pinimg.com/736x/56/ef/94/56ef943b3f42131b44b6797143d88711.jpg"
          className="img-fluid w-100"
          alt="صورة مقالات"
          style={{ objectFit: 'cover', height: '40vh' }}
        /> */}
        <div className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 p-4 rounded">
          <h1 className="fw-bold">مرحبًا بكم في عالم المقالات</h1>
          <p className="lead">استمتعوا بقراءة أحدث المقالات والمحتوى الحصري.</p>
        </div>
      </section>

      <div className="row">
        {/* الشريط الجانبي (Sidebar) */}
        <div className="col-lg-4">
          <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h5 className="font-bold mb-3" style={{ color: '#000', textAlign: 'right' }}>المقالات الأخيرة</h5>
            <ul className="list-unstyled">
              {callouts.map((post, index) => (
                <li className="d-flex align-items-center mb-3" key={index}>
                  <img
                    className="img-fluid"
                    src={post.imageSrc}
                    alt="مقال حديث"
                    style={{ width: "30%" }}
                  />
                  <div className="ms-3">
                    <Link to={post.href} style={{ color: '#000', textDecoration: 'none' }}>
                      {post.name}
                    </Link>
                    <small className="d-block text-muted">{post.date}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h5 className="font-bold mb-4" style={{ color: '#000', textAlign: 'right' }}>سحابة الكلمات الدلالية</h5>
            <div className="d-flex flex-wrap">
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#مشاريع</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#تكنولوجيا</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#سفر</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#مطاعم</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#أسلوب الحياة</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#تصميم</span>
              <span className="badge m-2" style={{ backgroundColor: '#115173', color: '#fff' }}>#رسم</span>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h5 className="font-bold mb-3" style={{ color: '#000', textAlign: 'right' }}>صور من إنستغرام</h5>
            <div className="d-flex flex-wrap">
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/25/81/2b/25812ba4f53180e9443e76361c9bbef9.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/ab/ac/78/abac785eebadf5e4cd7f07c86907d97c.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/c6/7a/44/c67a44f9c5cd7f070cfab43648215d49.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/1e/77/7d/1e777d63c1a5a2d9c5f943ddb07aef92.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/5f/16/82/5f1682acb6c4d19dcaa142e61e49ca54.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
              <img className="img-fluid m-1" src="https://i.pinimg.com/736x/c4/7e/18/c47e18518150b4cd1b9401bf11d6ab65.jpg" alt="صورة من إنستغرام" style={{ width: "30%" }} />
            </div>
          </div>

          <div className="bg-white shadow-sm rounded p-4 mb-4">
            <h5 className="font-bold" style={{ textAlign: 'right', color: '#000' }}>اشترك في نشرتنا الإخبارية</h5>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="أدخل بريدك الإلكتروني" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FFD700' }}>
                اشترك
              </button>
            </form>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="col-lg-8 ">
          <div className="bg-gray-100  no-underline" >
            <h2 className="text-2xl font-bold" style={{ color: '#000', textAlign: 'right' }}>المجموعات</h2>

            <div>
              <div className="mt-6 space-y-12">
                {currentArticles.map((callout, index) => (
                  <div key={callout.name} className="bg-white rounded-lg shadow-md overflow-hidden group relative">
                   <Link to="/PlogDetails" className="block">
                      <div className="absolute top-4 left-4" style={{
                        backgroundColor: '#FFD700',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        padding: '4px 8px',
                        borderRadius: '4px',
                      }}>
                        {callout.date}
                      </div>
                      <img alt={callout.imageAlt} src={callout.imageSrc} className="w-full h-64 object-cover group-hover:opacity-75" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold" style={{ color: '#000' }}>
                          {callout.name}
                        </h3>
                        <p className="mt-2" style={{ color: '#666' }}>
                          {callout.description}
                        </p>
                      </div>
                      <div className="p-6 pt-0 flex justify-between text-sm" style={{ color: '#666' }}>
                        {callout.tags.map((tag) => (
                          <span key={tag} className="rounded-full px-2 py-1" style={{ backgroundColor: '#115173', color: '#fff' }}>
                            {tag}
                          </span>
                        ))}
                        <span className="flex items-center">
                          <i className="fas fa-comments mr-1"></i> 01 تعليقات
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <nav className="mt-10">
                <ul className="pagination justify-center space-x-2">
                  <li className={`page-item ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} style={{ color: '#000' }}>
                      &laquo;
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => handlePageChange(index + 1)} style={{
                        backgroundColor: currentPage === index + 1 ? '#115173' : 'transparent',
                        borderColor: currentPage === index + 1 ? '#115173' : '#ccc',
                        color: currentPage === index + 1 ? '#fff' : '#000',
                        padding: '8px 12px',
                        borderRadius: '4px',
                      }}>
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  <li className={`page-item ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} style={{ color: '#000' }}>
                      &raquo;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;