'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

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
    console.log('Form submitted:', formData);
    alert('견적 신청이 완료되었습니다!');
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/KakaoTalk_Photo_2025-08-04-20-02-17_02_.jpg"
            alt="대표사진"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              철거매니아가 <span className="text-blue-600">최저가</span>를 보장합니다
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              전문 철거 서비스의 시작, 믿고 맡겨주세요
            </p>
            <div className="bg-red-600 text-white rounded-xl p-4 mb-8 max-w-2xl mx-auto animate-pulse">
              <p className="text-2xl md:text-3xl font-bold">🎯 폐업지원금 600만원+@ 지원!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'tel:010-4316-1348'}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-200"
              >
                📞 010-4316-1348
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-all duration-200"
              >
                견적 신청하기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              왜 철거매니아를 선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-600">믿을 수 있는 철거 전문가들이 함께합니다</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">신뢰있는 최저가 보장</h3>
              <p className="text-lg text-gray-600">업계 최저가 120% 보장</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👷</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">전문 인력</h3>
              <p className="text-lg text-gray-600">120명의 전문 인력 상주</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚛</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">폐기물 처리</h3>
              <p className="text-lg text-gray-600">공동 처리로 비용 절감</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              제공 서비스
            </h2>
            <p className="text-lg text-gray-600">철거부터 폐기물 처리까지 원스톱 서비스</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">건물 철거</h3>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>✓ 주택, 상가, 공장 철거</li>
                <li>✓ 안전한 작업 진행</li>
                <li>✓ 철거 허가 대행</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">인테리어 철거</h3>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>✓ 상가, 사무실 인테리어 철거</li>
                <li>✓ 깨끗한 마무리</li>
                <li>✓ 당일 작업 가능</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">폐기물 처리</h3>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>✓ 건설 폐기물 처리</li>
                <li>✓ 분리수거 및 재활용</li>
                <li>✓ 합법적 처리</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">폐업 컨설팅</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="text-lg">✓ 폐업 지원금 컨설팅</li>
                <li className="text-2xl font-bold text-red-600">✓ 폐업지원금 600만원+@ 지원</li>
                <li className="text-lg">✓ 빠른 처리 (평균 3주 단축)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              간단한 진행 과정
            </h2>
            <p className="text-lg text-gray-600">3단계로 끝나는 철거 서비스</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "상담 신청", desc: "전화 또는 온라인으로 간편하게 신청" },
              { step: "2", title: "현장 방문", desc: "전문가가 직접 방문하여 무료 견적" },
              { step: "3", title: "시공 완료", desc: "안전하고 깨끗한 철거 작업 진행" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              시공 사례
            </h2>
            <p className="text-lg text-gray-600">실제 진행한 철거 현장입니다</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "/KakaoTalk_Photo_2025-08-04-20-02-22_03_.jpg",
              "/KakaoTalk_Photo_2025-08-04-20-02-23_04_.jpg",
              "/KakaoTalk_Photo_2025-08-04-20-02-25_01_.jpg",
              "/KakaoTalk_Photo_2025-08-04-20-02-26_02_.jpg",
              "/KakaoTalk_Photo_2025-08-04-20-02-27_03_.jpg",
              "/KakaoTalk_Photo_2025-08-04-20-02-16_01_.jpg"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-lg"
              >
                <Image
                  src={img}
                  alt={`시공 사례 ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              지금 바로 상담받으세요
            </h2>
            <p className="text-xl mb-4 opacity-90">
              전문가가 친절하게 상담해드립니다
            </p>
            <div className="bg-yellow-400 text-gray-900 rounded-xl p-4 mb-8 max-w-2xl mx-auto animate-bounce">
              <p className="text-2xl md:text-3xl font-bold">💰 폐업지원금 600만원+@ 지원 가능!</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = 'tel:010-4316-1348'}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-200"
              >
                📞 전화 상담하기
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-700 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-800 transition-all duration-200"
              >
                온라인 견적 신청
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">철거매니아</h3>
              <p className="text-gray-400">
                믿을 수 있는 철거 전문 업체
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <p className="text-gray-400 mb-2">📞 010-4316-1348</p>
              <p className="text-gray-400 mb-2">✉️ info@chulgeomani.kr</p>
              <p className="text-gray-400">📍 경기 하남시 대청로22번길 9-18 3층</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">서비스</h4>
              <ul className="text-gray-400 space-y-2">
                <li>건물 철거</li>
                <li>인테리어 철거</li>
                <li>폐기물 처리</li>
                <li>폐업 컨설팅</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 철거매니아. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}