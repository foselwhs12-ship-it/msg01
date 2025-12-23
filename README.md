<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>출장마사지I수도권전지역마사지안마서비스</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }

        /* Header */
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .phone-btn {
            background: #ff6b6b;
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            transition: transform 0.3s;
        }

        .phone-btn:hover {
            transform: scale(1.05);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 80px 20px;
            text-align: center;
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            animation: fadeInUp 1s;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .region-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            max-width: 800px;
            margin: 30px auto;
        }

        .region-btn {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 12px 24px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 25px;
            text-decoration: none;
            transition: all 0.3s;
            backdrop-filter: blur(10px);
        }

        .region-btn:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-2px);
        }

        /* Container */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        /* Section Titles */
        .section-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 50px;
            color: #333;
            position: relative;
        }

        .section-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 15px auto;
        }

        /* Popular Regions */
        .popular-regions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin-bottom: 50px;
        }

        .region-card {
            background: white;
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
            cursor: pointer;
        }

        .region-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .region-card.hot {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
            color: white;
        }

        .region-card.hot::before {
            content: 'HOT';
            position: absolute;
            top: -10px;
            right: -10px;
            background: #ffd700;
            color: #333;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: bold;
        }

        .region-card {
            position: relative;
        }

        /* Features */
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }

        .feature-card {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s;
        }

        .feature-card:hover {
            transform: translateY(-5px);
        }

        .feature-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #667eea;
        }

        /* Service Types */
        .service-types {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }

        .service-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }

        .service-card:hover {
            transform: translateY(-5px);
        }

        .service-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
        }

        .service-content {
            padding: 25px;
        }

        .service-content h3 {
            color: #667eea;
            margin-bottom: 15px;
        }

        /* Guide Steps */
        .guide-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .step-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            position: relative;
        }

        .step-number {
            position: absolute;
            top: -20px;
            left: 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .step-card h3 {
            margin-top: 20px;
            margin-bottom: 15px;
            color: #333;
        }

        /* FAQ */
        .faq-list {
            max-width: 800px;
            margin: 0 auto;
        }

        .faq-item {
            background: white;
            margin-bottom: 15px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        .faq-question {
            padding: 20px;
            background: #667eea;
            color: white;
            cursor: pointer;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .faq-answer {
            padding: 20px;
            display: none;
        }

        .faq-item.active .faq-answer {
            display: block;
        }

        /* Testimonials */
        .testimonials {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .testimonial-card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-left: 4px solid #667eea;
        }

        .testimonial-text {
            font-style: italic;
            margin-bottom: 15px;
            color: #555;
        }

        .testimonial-author {
            color: #667eea;
            font-weight: bold;
        }

        /* Gallery */
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }

        .gallery-item {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .gallery-image {
            width: 100%;
            height: 250px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
        }

        .gallery-content {
            padding: 20px;
        }

        .gallery-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .tag {
            background: #f0f0f0;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            color: #667eea;
        }

        /* Footer */
        footer {
            background: #2c3e50;
            color: white;
            padding: 40px 20px;
            text-align: center;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-links a:hover {
            color: #667eea;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 1.8rem;
            }

            .region-buttons {
                flex-direction: column;
                align-items: center;
            }

            .section-title {
                font-size: 1.5rem;
            }
        }

        /* CTA Button */
        .cta-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
        }

        .cta-button {
            display: inline-block;
            background: #ff6b6b;
            color: white;
            padding: 18px 40px;
            border-radius: 30px;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: bold;
            margin-top: 20px;
            transition: transform 0.3s;
        }

        .cta-button:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-container">
            <div class="logo">출장마사지</div>
            <a href="tel:010-0000-0000" class="phone-btn">지금 전화하기</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <h1>서울 출장마사지 · 서울출장안마 · 수도권전지역</h1>
        <p>프리미엄 관리사 즉시 배정, 합리적 가격, 24시 상담</p>
        <div class="region-buttons">
            <a href="#" class="region-btn">강남 즉시 배정</a>
            <a href="#" class="region-btn">송파 즉시 배정</a>
            <a href="#" class="region-btn">서초 즉시 배정</a>
            <a href="#" class="region-btn">동작 즉시 배정</a>
            <a href="#" class="region-btn">광진 즉시 배정</a>
            <a href="#" class="region-btn">관악 즉시 배정</a>
            <a href="#" class="region-btn">강동 즉시 배정</a>
        </div>
    </section>

    <!-- Popular Regions -->
    <section class="container">
        <h2 class="section-title">실시간 인기 예약 지역</h2>
        <div class="popular-regions">
            <div class="region-card hot">강남구</div>
            <div class="region-card">송파구</div>
            <div class="region-card">서초구</div>
            <div class="region-card">광진구</div>
            <div class="region-card">관악구</div>
            <div class="region-card">동작구</div>
            <div class="region-card">강동구</div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="container">
        <h2 class="section-title">왜 우리를 선택해야 할까요</h2>
        <div class="features">
            <div class="feature-card">
                <div class="feature-icon">💰</div>
                <h3>100% 후불제 시스템</h3>
                <p>선입금, 예약비, 보증금 없이 안심하고 이용하세요. 모든 결제는 서비스 후 현장에서 이루어집니다.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">👩‍⚕️</div>
                <h3>엄선된 20대 관리사</h3>
                <p>까다로운 채용 과정과 체계적인 교육을 이수한 전문 관리사들이 맞춤형 케어를 제공합니다.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">💆</div>
                <h3>다양한 마사지 코스</h3>
                <p>스웨디시, 딥티슈, 아로마 테라피, 스포츠 마사지 등 고객님의 니즈에 맞는 코스를 선택하세요.</p>
            </div>
        </div>
    </section>

    <!-- Service Types -->
    <section class="container">
        <h2 class="section-title">마사지 코스 소개</h2>
        <div class="service-types">
            <div class="service-card">
                <div class="service-image">💆‍♀️</div>
                <div class="service-content">
                    <h3>스웨디시 마사지</h3>
                    <p>부드럽고 리듬감 있는 터치로 혈액 순환을 촉진하고, 전신 피로를 해소합니다.</p>
                </div>
            </div>
            <div class="service-card">
                <div class="service-image">💪</div>
                <div class="service-content">
                    <h3>딥티슈 마사지</h3>
                    <p>깊은 근육층까지 압력을 가해 만성 통증과 근육 뭉침을 풀어줍니다.</p>
                </div>
            </div>
            <div class="service-card">
                <div class="service-image">🌿</div>
                <div class="service-content">
                    <h3>아로마 테라피</h3>
                    <p>천연 에센셜 오일을 사용해 감각을 자극하며, 피부 영양 공급과 함께 마음의 안정을 줍니다.</p>
                </div>
            </div>
            <div class="service-card">
                <div class="service-image">🏃</div>
                <div class="service-content">
                    <h3>스포츠 마사지</h3>
                    <p>운동 후 회복을 위한 강력한 기법으로, 근육 탄력을 높이고 부상 예방에 도움을 줍니다.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Service Advantages -->
    <section class="container">
        <h2 class="section-title">특별한 서비스 강점</h2>
        <div class="features">
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>신속한 30분 내외 방문</h3>
                <p>예약 후 평균 30분 이내에 고객님이 계신 곳으로 도착합니다. 서울 전역과 경기 지역까지 24시간 운영합니다.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔒</div>
                <h3>프라이빗 1:1 케어</h3>
                <p>완벽한 1:1 프라이빗 케어로 다른 사람의 방해 없이 온전히 고객님께 집중합니다.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⭐</div>
                <h3>높은 재방문율</h3>
                <p>고객님의 피드백을 바탕으로 서비스를 지속적으로 개선하며, 단골 고객님께는 특별 혜택을 제공합니다.</p>
            </div>
        </div>
    </section>

    <!-- Guide -->
    <section class="container">
        <h2 class="section-title">이용 가이드</h2>
        <div class="guide-steps">
            <div class="step-card">
                <div class="step-number">1</div>
                <h3>예약하기</h3>
                <p>원하는 지역과 시간대를 말씀해주세요. 전화 또는 문자로 24시간 상담 가능합니다.</p>
            </div>
            <div class="step-card">
                <div class="step-number">2</div>
                <h3>확정하기</h3>
                <p>관리사 프로필 확인 후 확정합니다. 정확한 주소와 방 호수를 알려주세요.</p>
            </div>
            <div class="step-card">
                <div class="step-number">3</div>
                <h3>서비스 받기</h3>
                <p>안내된 시간에 관리사가 방문합니다. 모든 도구는 관리사가 준비해 드립니다.</p>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="container">
        <h2 class="section-title">자주 묻는 질문</h2>
        <div class="faq-list">
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(this)">
                    출장 지역은 어디까지인가요?
                    <span>▼</span>
                </div>
                <div class="faq-answer">
                    서울 전역과 경기 대부분 지역(수원, 고양, 부천 등)을 커버합니다.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(this)">
                    코스 가격은 어떻게 되나요?
                    <span>▼</span>
                </div>
                <div class="faq-answer">
                    60분 기본 코스부터 시작하며, 상담 시 상세 안내드립니다.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(this)">
                    캔슬 정책은?
                    <span>▼</span>
                </div>
                <div class="faq-answer">
                    도착 전 무료 캔슬 가능하나, 노쇼는 제한됩니다.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(this)">
                    관리사 교체는 가능한가요?
                    <span>▼</span>
                </div>
                <div class="faq-answer">
                    네, 도착 후 불편하시면 즉시 교체해드립니다.
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question" onclick="toggleFaq(this)">
                    위생 조치는?
                    <span>▼</span>
                </div>
                <div class="faq-answer">
                    모든 관리사는 마스크 착용과 소독을 철저히 하며, 위생 지침을 준수합니다.
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="container">
        <h2 class="section-title">고객 후기</h2>
        <div class="testimonials">
            <div class="testimonial-card">
                <p class="testimonial-text">"서울 출장마사지로 이용했는데, 관리사 분이 너무 친절하고 전문적이어서 다음에도 부를게요!"</p>
                <p class="testimonial-author">- 강남 거주 고객</p>
            </div>
            <div class="testimonial-card">
                <p class="testimonial-text">"경기 출장마사지 중 최고! 후불제라 안심하고, 마사지 후 피로가 싹 풀렸어요."</p>
                <p class="testimonial-author">- 수원 고객</p>
            </div>
            <div class="testimonial-card">
                <p class="testimonial-text">"프라이빗 케어가 인상적이었어요. 추천합니다!"</p>
                <p class="testimonial-author">- 용인 고객</p>
            </div>
        </div>
    </section>

    <!-- Gallery -->
    <section class="container">
        <h2 class="section-title">프리미엄 출장관리 갤러리</h2>
        <div class="gallery">
            <div class="gallery-item">
                <div class="gallery-image">🏨</div>
                <div class="gallery-content">
                    <h3>호텔 객실 맞춤 출장마사지</h3>
                    <p>프라이빗 관리, 빠른 배정으로 편안한 컨디션 회복을 도와드립니다.</p>
                    <div class="gallery-tags">
                        <span class="tag">후불제</span>
                        <span class="tag">비대면 예약</span>
                        <span class="tag">프라이버시</span>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">🌺</div>
                <div class="gallery-content">
                    <h3>아로마 테라피</h3>
                    <p>천연 오일로 심신 안정, 수도권 전지역 30분 내 도착을 목표로 합니다.</p>
                    <div class="gallery-tags">
                        <span class="tag">30분내 도착</span>
                        <span class="tag">수도권 전지역</span>
                        <span class="tag">아로마</span>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">💪</div>
                <div class="gallery-content">
                    <h3>스포츠 테라피</h3>
                    <p>근육 피로 회복과 컨디셔닝 중심, 투명한 요금 안내로 안심 이용.</p>
                    <div class="gallery-tags">
                        <span class="tag">투명 요금</span>
                        <span class="tag">컨디셔닝</span>
                        <span class="tag">전담 매니저</span>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">🏠</div>
                <div class="gallery-content">
                    <h3>홈타이 · 오피스텔 방문 마사지</h3>
                    <p>자택·오피스텔·숙소 어디든 방문, 고객 동선에 맞춘 프리미엄 관리.</p>
                    <div class="gallery-tags">
                        <span class="tag">방문 관리</span>
                        <span class="tag">개인정보 보호</span>
                        <span class="tag">24시 상담</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <h2>지친 일상을 재충전하세요</h2>
        <p>20대 전문 관리사의 섬세한 손길로 근육을 이완시키고, 스트레스를 날려버리세요.</p>
        <a href="tel:010-0000-0000" class="cta-button">지금 바로 예약하기</a>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-links">
                <a href="#">사이트맵</a>
                <a href="#">로봇스</a>
                <a href="tel:010-0000-0000">전화</a>
            </div>
            <p>&copy; 2025 출장마사지 · 서울 출장마사지 · 서울출장안마</p>
        </div>
    </footer>

    <script>
        function toggleFaq(element) {
            const faqItem = element.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>

