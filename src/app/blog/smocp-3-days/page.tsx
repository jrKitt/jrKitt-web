import Link from "next/link";

export default function SMOCPBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                jrKitt
              </div>
              <span className="text-xl"></span>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link href="/#blog" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium">
                ← กลับไปบล็อก
              </Link>
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium">
                หน้าแรก
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-20 px-6 text-black">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="mb-6">
              <Link href="/#blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                บล็อก
              </Link>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                สร้างเว็บ SMOCP ใน 3 วัน
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <time>14 มิถุนายน 2025</time>
                <span>•</span>
                <span>อ่าน 8 นาที</span>
                <span>•</span>
                <span>Express.js, Bootstrap, Google Script</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="text-xl leading-relaxed text-gray-700 mb-8">
              ตอนแรกกะจะไม่ได้ทำ แต่พอเห็นพี่ๆในห้องนั่งวาด Flow diagram กันสำหรับโปรเจกต์ SMOCP ก็สนใจและได้โอกาสเข้าร่วม พัฒนาเว็บไซต์ e-commerce สำหรับสโม วิทยาลัยคอมพิวเตอร์ภายใน 3 วัน
            </div>

            <p className="mb-6">
              เมื่อเห็นพี่ๆกำลังวางแผนโปรเจกต์ SMOCP (Student Management Organization of Computer Programming) 
              ผมก็รู้สึกสนใจและอยากเป็นส่วนหนึ่งของทีม แม้ว่าตอนแรกจะคิดว่าจะไม่เข้าร่วม 
              แต่ความท้าทายในการสร้างเว็บไซต์ e-commerce ภายใน 3 วันทำให้ผมตัดสินใจลองดู
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">เครื่องมือและเทคโนโลยีที่ใช้</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span><strong>Frontend:</strong> HTML, CSS, Bootstrap - เลือกใช้เพื่อความรวดเร็วในการพัฒนา</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span><strong>Backend:</strong> Express.js - Node.js framework ที่คุ้นเคยและใช้งานง่าย</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span><strong>Database:</strong> Google Sheets + Google Script - วิธีแก้ปัญหาเฉพาะหน้าที่ได้ผล</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span><strong>Deployment:</strong> Vercel - deploy ง่ายและรวดเร็ว</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">วันที่ 1 - การเริ่มต้นและการวางแผน</h2>
            <p className="mb-4">
              วันแรกเป็นการวางโครงสร้างเบื้องต้น หน้าเว็บมีเป็นสิบๆหน้า ต้องออกแบบ UI และวาง Flow การทำงานทั้งหมด 
              โชคดีที่มีพี่ภูริเป็น Project Manager ทำให้การทำงานสนุกและรวดเร็วกว่าเดิมมาก 
              เพราะพี่แกรู้ดีว่าเบื้องบนต้องการอะไร
            </p>
            
            <p className="mb-6">
              การมี PM ที่ดีจริงๆ สำคัญมาก เพราะช่วยให้ทีมไม่ต้องเสียเวลาไปกับการคิดว่าควรทำอะไร 
              และไม่ต้องไปเดาใจว่าลูกค้าอยากได้แบบไหน พี่ภูริช่วยแปลความต้องการให้เราเข้าใจง่ายขึ้น
            </p>

            <div className="bg-gray-100 border-l-4 border-gray-400 p-4 mb-6">
              <p className="text-gray-800 font-medium">
                 บทเรียน: การมี Project Manager ที่เข้าใจทั้งทางเทคนิคและความต้องการของลูกค้า 
                ช่วยให้การพัฒนาเป็นไปอย่างราบรื่นและมีประสิทธิภาพ
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">วันที่ 2 - ลงมือเขียนโค้ดจริงจัง</h2>
            <p className="mb-4">
              วันนี้ผมเริ่มลงโค้ดแบบจริงจัง อย่างแรกเลยต้องไปจัดการโค้ดด้านหลังก่อน 
              เพราะตัวฐานข้อมูลเราใช้เป็นเหมือนรูปแบบฟอร์ม ส่วนนี้ให้พี่ด้าช่วยทำ 
              เพราะผมไม่เคยลองใช้ Google Script มาก่อน
            </p>

            <p className="mb-4">
              ส่วน UI ต้องนั่งทำจนดึกจนได้รูปแบบที่ลงตัว การใช้ Bootstrap ช่วยให้พัฒนา UI ได้เร็วมาก 
              แต่ก็ต้องปรับแต่งให้ดูไม่เหมือน template ธรรมดา
            </p>

            <p className="mb-6">
              หลังจากได้ Feedback จากแก๊งสโมบ้านใหญ่ก็เริ่มมาปรับปรุงรอบ 2 
              พอเสร็จก็เทสเรื่อยๆจนทำ UI เสร็จประมาณนึง การได้รับ feedback เร็วๆ ช่วยมาก 
              เพราะไม่ต้องไปทำผิดทิศทางนาน
            </p>

            <div className="bg-gray-100 border-l-4 border-gray-400 p-4 mb-6">
              <p className="text-gray-800 font-medium">
                ความสำเร็จ: การใช้ Google Sheets เป็นฐานข้อมูลช่วยให้ทีมสามารถจัดการข้อมูลได้ง่าย 
                โดยไม่ต้องตั้งค่า database server ที่ซับซ้อน
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">วันที่ 3 - วันสุดท้ายแห่งการแก้ปัญหา</h2>
            <p className="mb-4">
              วันนี้วันสุดท้ายที่โค้ดจะต้องสมบูรณ์แล้ว แต่มันติดปัญหาที่ทางเบื้องบนติดเรื่องความ Security 
              ผมเลยต้องกระหน่ำแก้ไข Domain และ Host ก็เช่าให้ 
              ความปลอดภัยไม่ต้องพูดถึง บล็อกหมดทุกทางที่จะทำอะไรแปลกๆ
            </p>

            <p className="mb-4">
              ต้องขอบคุณพี่ภูริที่ต้องเหนื่อยไปคุยกับเบื้องบนให้ 
              เพราะผมก็ไม่ได้มีอำนาจตัดสินใจอะไรขนาดนั้น 
              แล้วตอนที่รู้ก็อยู่ข้างนอกทำธุระ พอรู้เรื่องเลยดิ่งเข้าสโมเลย
            </p>

            <p className="mb-6">
              ช่วงบ่ายเป็นการ rush ปรับแต่งระบบ security และเตรียมความพร้อมสำหรับการเปิดตัว 
              ทุกคนต่างก็ตื่นเต้นและเครียดกันหน่อย เพราะเวลาเหลือน้อยมาก
            </p>

            <div className="bg-gray-100 border-l-4 border-gray-400 p-4 mb-6">
              <p className="text-gray-800 font-medium">
                ความท้าทาย: การจัดการกับข้อกังวลเรื่อง security ในช่วงสุดท้าย 
                ทำให้เรียนรู้ว่าควรคิดเรื่องนี้ตั้งแต่เริ่มต้นโปรเจกต์
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Launch Day - วันแห่งความภาคภูมิใจ</h2>
            <p className="mb-4">
              วันนี้มีแพลนเดินทางไปเขาใหญ่เพราะมีแพลนกับคุณนายไว้แล้ว 
              แต่ก็ต้องแบก MacBook ไปเพราะเป็นวันรันเว็บ 
              ช่วงเช้าเป็นช่วงที่เทสระบบทั้งหมดว่าใช้ได้ปกติมั้ย ข้อมูลถูกต้องมั้ย เลขใบเสร็จถูกมั้ย
            </p>

            <p className="mb-4">
              เรื่องนี้ให้พี่ภูริกับทางบ้านใหญ่สโม CP เทส นี่คือดีมากเพราะพอเทสเราก็รู้ปัญหา 
              ผมก็ต้องจอดปั๊มแก้ให้ แต่ก่อนขึ้นมอเตอร์เวย์ก็บอกพี่ภูริแล้วว่า 
              ถ้าพี่อยากแก้อะไรให้ push ขึ้นมา ผมจะ Deploy ให้เลยทันที
            </p>

            <p className="mb-4">
              พอถึงที่พักก็ถึงเวลาสำคัญแล้ว อยากอยู่เป็นส่วนร่วมในวันเปิดขายเลย 
              บอกให้พี่ภูริเปิดรูปให้หน่อย อยากมีส่วนร่วม พี่นั่งนับถอยหลัง Launch เว็บ
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ช่วงเวลาแห่งความสำเร็จ</h3>
              <p className="text-gray-700 mb-3">
                <strong>พอ Order แรกเข้านี่ดีใจมากๆๆ ไม่คิดว่าจะเร็วขนาดนี้!</strong> 
                มันฟินมากเลยที่เว็บที่เราทำมันมีคนใช้จริง
              </p>
              <p className="text-gray-600 text-sm">
                ความรู้สึกเมื่อเห็นผลงานของตัวเองถูกใช้งานจริงๆ เป็นสิ่งที่ไม่สามารถอธิบายได้ 
                มันทำให้รู้ว่าสิ่งที่เราทำมีความหมายและเป็นประโยชน์จริงๆ
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">สิ่งที่ได้เรียนรู้จากโปรเจกต์นี้</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">บทเรียนสำคัญ:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>การทำงานเป็นทีมในเวลาจำกัด:</strong> การสื่อสารที่ชัดเจนและการแบ่งงานที่เหมาะสมสำคัญมาก</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>การจัดการปัญหาเฉพาะหน้า:</strong> ยืดหยุ่นและหาทางออกที่ใช้ได้จริงในเวลาจำกัด</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>การใช้เครื่องมือใหม่:</strong> Google Script เป็นทางเลือกที่ดีสำหรับ prototype รวดเร็ว</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>ความรู้สึกเมื่อเห็นผลงานถูกใช้:</strong> แรงจูงใจที่ยิ่งใหญ่ที่สุดสำหรับ developer</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">สิ่งที่จะทำต่างไปถ้าได้ทำใหม่</h2>
            <ul className="space-y-2 mb-8 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>วางแผนเรื่อง security ตั้งแต่เริ่มต้น</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>เตรียมแผน backup สำหรับการ deploy</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>ทำ testing แบบ automated เพื่อลดเวลา manual testing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>สร้าง documentation ระหว่างการพัฒนา</span>
              </li>
            </ul>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  อ่านเรื่องราวต้นฉบับได้ที่โพสต์ Threads
                </p>
                <a 
                  href="https://www.threads.com/@k.tcrsw/post/DK3_MjjT8WH" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                  </svg>
                  อ่านโพสต์ต้นฉบับ
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p>© 2025 Kittichai Raksawong (jrKitt) • Built with Love</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with ❤️ <a href="www.jrKitt.com" className="text-teal-500">jrKitt</a>
          </p>
        </div>
      </footer>

    </div>
  );
}
