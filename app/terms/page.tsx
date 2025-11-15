import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-white mb-6">شروط الخدمة</h1>
            <p className="text-white/80 mb-6">آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</p>

            <div className="space-y-6 text-white/90 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">1. قبول الشروط</h2>
                <p>
                  من خلال الوصول إلى هذه الخدمة واستخدامها، فإنك تقبل وتوافق على الالتزام بشروط 
                  الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">2. استخدام الخدمة</h2>
                <p>توافق على استخدام خدماتنا للأغراض القانونية فقط ووفقًا لهذه الشروط. توافق على عدم:</p>
                <ul className="list-disc mr-6 mt-2 space-y-1">
                  <li>انتهاك أي قوانين أو لوائح سارية</li>
                  <li>انتهاك حقوق الآخرين</li>
                  <li>نقل رموز ضارة أو خبيثة</li>
                  <li>محاولة الحصول على وصول غير مصرح به</li>
                  <li>الانخراط في أي نشاط احتيالي</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">3. الملكية الفكرية</h2>
                <p>
                  جميع المحتويات والعلامات التجارية والبيانات على هذه الخدمة هي ملك لأصحابها 
                  المعنيين. لا يجوز لك استخدام أي محتوى أو نسخه أو توزيعه دون إذن صريح.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">4. محتوى المستخدم</h2>
                <p>
                  أنت تحتفظ بملكية أي محتوى تقدمه. من خلال تقديم المحتوى، فإنك تمنحنا ترخيصًا عالميًا 
                  غير حصري ومجاني لاستخدام المحتوى الخاص بك وإعادة إنتاجه وتوزيعه فيما يتعلق بخدماتنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">5. إخلاء الضمانات</h2>
                <p>
                  يتم تقديم خدماتنا "كما هي" دون ضمانات من أي نوع. لا نضمن أن خدماتنا ستكون 
                  متواصلة أو آمنة أو خالية من الأخطاء.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">6. تحديد المسؤولية</h2>
                <p>
                  لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناشئة عن 
                  استخدامك لخدماتنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">7. الإنهاء</h2>
                <p>
                  نحتفظ بالحق في إنهاء أو تعليق وصولك إلى خدماتنا في أي وقت، دون إشعار، للسلوك 
                  الذي يخالف هذه الشروط أو يضر بالمستخدمين الآخرين.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">8. القانون الحاكم</h2>
                <p>
                  تخضع هذه الشروط وتفسر وفقًا للقوانين المعمول بها، دون مراعاة أحكام تنازع القوانين.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">9. التغييرات على الشروط</h2>
                <p>
                  قد نقوم بتعديل هذه الشروط في أي وقت. يشكل الاستخدام المستمر لخدماتنا بعد التغييرات 
                  قبولًا للشروط المعدلة.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-3">10. معلومات الاتصال</h2>
                <p>
                  للأسئلة حول شروط الخدمة هذه، اتصل بنا على:
                </p>
                <p className="mt-2">
                  البريد الإلكتروني: legal@myzajsx.com<br />
                  العنوان: الكويت 
                </p>
              </section>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
