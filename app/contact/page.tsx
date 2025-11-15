import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d9267d] via-[#a82c78] to-[#7a3374] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            العودة للرئيسية
          </Button>
        </Link>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-6">اتصل بنا</h1>
            
            <div className="space-y-6 text-white/90">
              <p className="leading-relaxed">
                هل لديك أسئلة أو استفسارات؟ نحن هنا للمساعدة. تواصل معنا من خلال أي من القنوات التالية:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">البريد الإلكتروني</h3>
                    <p className="text-white/80">contact@zajsx.com</p>
                    <p className="text-sm text-white/60 mt-1">عادة نرد خلال 24 ساعة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">الهاتف</h3>
                    <p className="text-white/80" dir="ltr">+965 (555) 121-11</p>
                    <p className="text-sm text-white/60 mt-1">الإثنين - الجمعة، 9 صباحًا - 5 مساءً</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">العنوان</h3>
                    <p className="text-white/80">
                      شارع الأعمال 2<br />
                      جناح 100<br />
                      الكويت<br />

                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6 mt-8">
                <h2 className="text-xl font-semibold text-white mb-3">للاستفسارات المحددة</h2>
                <ul className="space-y-2 text-white/80">
                  <li><strong className="text-white">مخاوف الخصوصية:</strong> privacy@zajsx.com</li>
                  <li><strong className="text-white">المسائل القانونية:</strong> legal@zajsx.com</li>
                  <li><strong className="text-white">استفسارات الأعمال:</strong> business@zajsx.com</li>
                  <li><strong className="text-white">الدعم الفني:</strong> support@zajsx.com</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
