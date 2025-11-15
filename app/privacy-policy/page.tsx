import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d9267d] via-[#a82c78] to-[#7a3374] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            العودة للرئيسية
          </Button>
        </Link>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-6">سياسة الخصوصية</h1>
            <p className="text-white/80 mb-6">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>

            <div className="space-y-6 text-white/90 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">1. المعلومات التي نجمعها</h2>
                <p>
                  نجمع المعلومات التي تقدمها لنا مباشرة، بما في ذلك الاسم وعنوان البريد الإلكتروني 
                  وأي معلومات أخرى تختار تقديمها. نجمع أيضًا تلقائيًا معلومات معينة عن جهازك عند 
                  استخدام خدماتنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">2. كيف نستخدم معلوماتك</h2>
                <p>نستخدم المعلومات التي نجمعها من أجل:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>توفير خدماتنا وصيانتها وتحسينها</li>
                  <li>إرسال الإشعارات الفنية ورسائل الدعم</li>
                  <li>الرد على تعليقاتك وأسئلتك</li>
                  <li>مراقبة وتحليل الاتجاهات والاستخدام</li>
                  <li>الامتثال للالتزامات القانونية</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">3. مشاركة المعلومات</h2>
                <p>
                  لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط 
                  في الحالات التالية:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>بموافقتك</li>
                  <li>للامتثال للالتزامات القانونية</li>
                  <li>لحماية حقوقنا ومنع الاحتيال</li>
                  <li>مع مقدمي الخدمات الذين يساعدون في عملياتنا</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">4. أمن البيانات</h2>
                <p>
                  نطبق تدابير تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به 
                  أو التعديل أو الكشف أو التدمير. ويشمل ذلك تشفير SSL والخوادم الآمنة وعمليات 
                  التدقيق الأمني المنتظمة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">5. حقوقك</h2>
                <p>لديك الحق في:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>الوصول إلى بياناتك الشخصية</li>
                  <li>تصحيح البيانات غير الدقيقة</li>
                  <li>طلب حذف بياناتك</li>
                  <li>الاعتراض على معالجة بياناتك</li>
                  <li>نقل البيانات</li>
                  <li>سحب الموافقة</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">6. ملفات تعريف الارتباط</h2>
                <p>
                  نستخدم ملفات تعريف ارتباط أساسية لتشغيل خدماتنا وملفات تعريف ارتباط تحليلية لفهم 
                  كيفية استخدامك لخدماتنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">7. خدمات الطرف الثالث</h2>
                <p>
                  قد تحتوي خدماتنا على روابط لمواقع طرف ثالث. نحن غير مسؤولين عن ممارسات الخصوصية 
                  الخاصة بهذه المواقع. نشجعك على قراءة سياسات الخصوصية الخاصة بهم.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">8. خصوصية الأطفال</h2>
                <p>
                  خدماتنا غير مخصصة للأطفال دون سن 13 عامًا. لا نجمع عن قصد معلومات شخصية من 
                  الأطفال دون سن 13 عامًا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">9. نقل البيانات الدولية</h2>
                <p>
                  قد يتم نقل معلوماتك ومعالجتها في دول غير دولتك. نضمن وجود ضمانات مناسبة لحماية 
                  بياناتك.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">10. التغييرات على هذه السياسة</h2>
                <p>
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات من خلال نشر 
                  السياسة الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث".
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">11. اتصل بنا</h2>
                <p>
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:
                </p>
                <p className="mt-2">
                  البريد الإلكتروني: privacy@zajsx.com<br />
                  العنوان: عنوان عملك
                </p>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
