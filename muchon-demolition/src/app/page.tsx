'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    postalCode: '',
    detailAddress: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('견적 신청이 완료되었습니다!');
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-black">견적 신청</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-black font-semibold mb-2">철거할 주소</label>
                <input
                  type="text"
                  placeholder="주소를 입력해주세요"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  우편번호 검색
                </button>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="상세 주소를 입력해주세요"
                  value={formData.detailAddress}
                  onChange={(e) => handleInputChange('detailAddress', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">이름</label>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-black font-semibold mb-2">전화번호</label>
                <input
                  type="tel"
                  placeholder="전화번호를 입력해주세요"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  신청하기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/KakaoTalk_Photo_2025-08-04-20-02-16_01_.jpg"
            alt="철거 작업 현장"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-8">
              <div className="text-2xl mb-4 text-white font-bold bg-black/30 inline-block px-4 py-2 rounded-lg">철거무촌</div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              최저가 120% 보장!<br />
              <span className="text-blue-400">국내 최대 철거회사</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 bg-black/30 inline-block px-6 py-3 rounded-lg">
              전국 300여개 철거 대리점의 실시간 최저가 견적
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-2xl"
              >
                견적 문의하기
              </motion.button>
              <motion.button
                onClick={() => setShowForm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-2xl"
              >
                3초만에 견적 신청
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-black">
        {/* Vertical Line for this section only - shortened */}
        <div className="absolute left-1/2 top-16 bottom-16 w-px bg-blue-400 transform -translate-x-1/2 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-right pr-8 lg:pr-20"
            >
              <div className="mb-8">
                <div className="text-white font-bold text-2xl mb-4 bg-blue-600/20 inline-block px-4 py-2 rounded-lg">철거무촌</div>
              </div>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">무촌철거가 타업체 대비 평균 35% 저렴한 이유</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                <span className="text-blue-400">철거는 인프라</span>를 갖출수록<br />
                <span className="text-blue-400">비용이 낮아집니다</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  전화 문의하기
                </motion.button>
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  3초만에 견적 신청
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-start pl-8 lg:pl-20"
            >
              <div className="relative">
                <Image
                  src="/KakaoTalk_Photo_2025-08-04-20-02-17_02_.jpg"
                  alt="철거 전문 인력"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 bg-black relative">
        {/* Vertical Line for this section only - shortened */}
        <div className="absolute left-1/2 top-16 bottom-16 w-px bg-blue-400 transform -translate-x-1/2 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-end pr-8 lg:pr-20"
            >
              <div className="relative">
                <Image
                  src="/KakaoTalk_Photo_2025-08-04-20-02-18_03_.jpg"
                  alt="전문가"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left pl-8 lg:pl-20"
            >
              <div className="mb-8">
                <div className="text-white font-bold text-2xl mb-4 bg-blue-600/20 inline-block px-4 py-2 rounded-lg">철거무촌</div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                철거 전문 인력
              </h1>
              <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-blue-400">
                120명 상주
              </h2>
              <p className="text-xl text-gray-300 mb-2">평균 철거 인건비</p>
              <p className="text-2xl text-blue-400 font-bold mb-8">24% 절감</p>

              <div className="mb-8 bg-gray-900/50 p-6 rounded-xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-tight">
                  폐기물<br />
                  <span className="text-blue-400">공동 처리</span>
                </h3>
                <p className="text-gray-300 mb-2">평균 폐기물 처리비</p>
                <p className="text-blue-400 text-xl font-bold">17% 절감</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  전화 문의하기
                </motion.button>
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  3초만에 견적 신청
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultant Section */}
      <section className="py-20 bg-black relative">
        {/* Vertical Line for this section only - shortened */}
        <div className="absolute left-1/2 top-16 bottom-16 w-px bg-blue-400 transform -translate-x-1/2 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-right pr-8 lg:pr-20"
            >
              <div className="mb-8">
                <div className="text-white font-bold text-2xl mb-4 bg-blue-600/20 inline-block px-4 py-2 rounded-lg">철거무촌</div>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-white leading-tight">
                  폐기물<br />
                  <span className="text-blue-400">공동 처리</span>
                </h1>
                <p className="text-gray-300 mb-2">평균 폐기물 처리비</p>
                <p className="text-blue-400 text-xl font-bold mb-4">17% 절감</p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                  <span className="text-blue-400">전문 폐업 컨설턴트</span>
                </h2>
                <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4">60여명 상주</h3>
                <div className="bg-blue-600/20 p-4 rounded-lg">
                  <p className="text-gray-200 mb-1">폐업지원금 최대 금액 수령 (400만원+)</p>
                  <p className="text-gray-200">최단기 수령 (평균 3주 단축)</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  전화 문의하기
                </motion.button>
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  3초만에 견적 신청
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-start pl-8 lg:pl-20"
            >
              <div className="relative">
                <Image
                  src="/KakaoTalk_Photo_2025-08-04-20-02-19_04_.jpg"
                  alt="폐기물 처리"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Service Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-end pr-8 lg:pr-20"
            >
              <div className="relative">
                <Image
                  src="/KakaoTalk_Photo_2025-08-04-20-02-21_01_.jpg"
                  alt="서류 대관"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left pl-8 lg:pl-20"
            >
              <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-white leading-tight">
                철거 서류대관<br />
                <div className="border-b-4 border-blue-400 inline-block pb-2 mt-2">
                  <span className="text-blue-400">전문 건축사 상주</span>
                </div>
              </h1>
              <div className="bg-blue-600/20 p-4 rounded-lg mb-8">
                <p className="text-gray-200 mb-1">타 경영업체 대비</p>
                <p className="text-gray-200 text-lg font-semibold">3~6주 기간 단축</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  전화 문의하기
                </motion.button>
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  3초만에 견적 신청
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-black relative">
        {/* Vertical Line for this section only - shortened */}
        <div className="absolute left-1/2 top-16 bottom-16 w-px bg-blue-400 transform -translate-x-1/2 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-right pr-8 lg:pr-20"
            >
              <div className="mb-8">
                <div className="text-white font-bold text-2xl mb-4 bg-blue-600/20 inline-block px-4 py-2 rounded-lg">철거무촌</div>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                  철거 서류대관<br />
                  <span className="text-blue-400">전문 건축사 상주</span>
                </h1>
                <p className="text-gray-300 mb-1">타 경영업체 대비</p>
                <p className="text-gray-300 text-lg font-semibold">3~6주 기간 단축</p>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                전국 검증된<br />
                <span className="text-blue-400">300여개 파트너사</span>
              </h2>
              <div className="bg-blue-600/20 p-4 rounded-lg mb-8">
                <p className="text-gray-200 mb-1">검증된 파트너사들과의</p>
                <p className="text-gray-200">고도화 네트워크 등 차별화 경쟁력</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  전화 문의하기
                </motion.button>
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  3초만에 견적 신청
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-start pl-8 lg:pl-20"
            >
              <div className="relative">
                <Image
                  src="/KakaoTalk_Photo_2025-08-04-20-02-21_02_.jpg"
                  alt="파트너사 네트워크"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section (White Background) - NO LINE */}
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-gray-800 font-bold text-2xl mb-4 bg-blue-600/20 inline-block px-4 py-2 rounded-lg">철거무촌</div>
            <p className="text-gray-600 mb-8 text-lg">철거의 시작부터 끝까지 함께합니다</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              신속하고 정확한 <span className="text-blue-600">철거 과정 안내</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
              { 
                step: "Step 1", 
                title: "30초만에", 
                subtitle: "철거 요청", 
                desc: "최소한의 정보로\n전화상담을 진행합니다" 
              },
              { 
                step: "Step 2", 
                title: "당일", 
                subtitle: "현장 방문", 
                desc: "전국의 우수한 업체들이\n무료 현장 견적을 진행합니다" 
              },
              { 
                step: "Step 3", 
                title: "선 시공", 
                subtitle: "후 정산", 
                desc: "계약부터 정산까지\n무손이 함께합니다" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="mb-6">
                  <div className="text-blue-600 font-semibold mb-2 text-lg">{item.step}</div>
                  <div className="w-full h-2 bg-gray-300 rounded-full mb-4">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${((index + 1) / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center mx-auto mb-6 border-2 border-blue-200 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.title}</div>
                    <div className="text-lg font-semibold text-black">{item.subtitle}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-base whitespace-pre-line leading-relaxed">
                  {item.desc}
                </p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-32 -right-6 text-blue-600 text-2xl">▶</div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-800 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              전화 문의하기
            </motion.button>
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              3초만에 견적 신청
            </motion.button>
          </div>
        </div>
      </section>

      {/* Final Stats & Portfolio Section - NO LINE */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-white font-bold text-2xl mb-4 bg-blue-600/20 inline-block px-4 py-2 rounded-lg">철거무촌</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              안심하세요, 무촌철거는 <span className="text-blue-400">전국 1등입니다</span>
            </h2>
            <p className="text-gray-300 mb-12 text-lg bg-gray-900/50 inline-block px-6 py-3 rounded-lg">누적 계약 건수, 누적 시공 거래액 기준</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🏆</div>
              <div className="text-gray-300 mb-2 text-lg">누적 계약 건수</div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4">10,232건</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🏆</div>
              <div className="text-gray-300 mb-2 text-lg">누적 시공 거래액</div>
              <div className="text-5xl lg:text-6xl font-bold text-blue-400 mb-4">1,382억</div>
            </motion.div>
          </div>

          {/* Portfolio Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { img: "/KakaoTalk_Photo_2025-08-04-20-02-22_03_.jpg", title: "김정식 아파트 인테리어 철거", date: "철거 철거사 2025.08.04" },
              { img: "/KakaoTalk_Photo_2025-08-04-20-02-23_04_.jpg", title: "용산구 식당 철거", date: "철거 철거2 2025.08.04" },
              { img: "/KakaoTalk_Photo_2025-08-04-20-02-25_01_.jpg", title: "전등 전구 시설 철거 실무원", date: "철거전문철거는 전속사 2025.08.04" },
              { img: "/KakaoTalk_Photo_2025-08-04-20-02-26_02_.jpg", title: "용산구 아파트윈도 부분철거", date: "철거 전속 2025.08.04" },
              { img: "/KakaoTalk_Photo_2025-08-04-20-02-27_03_.jpg", title: "강릉 편백건 폐기물 소각시...", date: "철거전문철거는 철거사 2025.08.04" },
              { img: "/KakaoTalk_Photo_2025-08-04-20-02-16_01_.jpg", title: "충북1", date: "철거 2025.08.04" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-white text-xs font-medium mb-1 truncate">{item.title}</div>
                    <div className="text-gray-300 text-xs truncate">{item.date}</div>
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <div className="text-blue-400 text-lg">🔍</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              전화 문의하기
            </motion.button>
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              3초만에 견적 신청
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 text-blue-400">철거무촌</h3>
              <p className="text-gray-300 leading-relaxed">
                국내 최대 철거 전문 업체<br />
                최저가 보장 서비스
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <p className="text-gray-300 mb-2">대표번호: 1588-0000</p>
              <p className="text-gray-300 mb-2">이메일: info@muchon.kr</p>
              <p className="text-gray-300">주소: 서울특별시 강남구</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">서비스</h4>
              <ul className="text-gray-300 space-y-2">
                <li>건물 철거</li>
                <li>인테리어 철거</li>
                <li>폐기물 처리</li>
                <li>현장 정리</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          >
            <p>&copy; 2024 철거무촌. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}