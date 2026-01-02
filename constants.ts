
import { MandalartData } from './types';

export const INITIAL_DATA_2026: MandalartData = {
  core: {
    title: "HARIM JUNG • THE STANDARD",
    subtitle: "2026 GLOBAL ACTION PLAN"
  },
  sections: [
    {
      id: "un-partnership",
      title: "1. UN 파트너십",
      color: "cell-category",
      items: [
        { id: "un-1", text: "UNFCCC 네트워킹", description: "적응위원회(Adaptation Committee) 담당자 링크드인 1촌 맺기 및 최신 보고서 기술 피드백 DM 발송", completed: false },
        { id: "un-2", text: "UNITAR Roster 갱신", description: "Roster 인력풀 등록 최신화 및 담당 에이전트에게 매월 정기 포트폴리오 메일 발송", completed: false },
        { id: "un-3", text: "WMO/IAEA 데모", description: "기상/원자력 데이터 시각화 데모 제작 후 공식 계정 태깅하여 링크드인 포스팅", completed: false },
        { id: "un-4", text: "Pre-Demo 선물", description: "타겟 기관의 미공개 PDF 보고서를 엔진으로 시각화하여 '디지털 전환 선물'로 선제 발송", completed: false },
        { id: "un-5", text: "추천서(LoR) 확보", description: "프로젝트 종료 1주일 전 추천서 초안 송부하여 공식 승인 및 수령 완료", completed: false },
        { id: "un-6", text: "공식 파트너 권한", description: "웹사이트 하단에 'Official Technology Provider' 명기 권한 획득", completed: false },
        { id: "un-7", text: "포럼 개인 브랜딩", description: "UN 관련 포럼 연 4회 참석하여 세션 종료 후 날카로운 질문으로 인지도 노출", completed: false },
        { id: "un-8", text: "현지 오프라인 접점", description: "토론토 내 국제기구 네트워킹 모임 월 1회 참석하여 현지 담당자 접점 확보", completed: false }
      ]
    },
    {
      id: "product-engine",
      title: "2. 제품화 (Engine)",
      color: "cell-category",
      items: [
        { id: "pe-1", text: "Engine 용어 통일", description: "서비스 내 모든 모듈 용어를 'Engine' 체계로 통일하여 SI 용역이 아닌 제품 이미지 구축", completed: false },
        { id: "pe-2", text: "3단계 가격 패키징", description: "UN 전용, 기업용, 연구용 3가지 고정 가격제 확정 및 제안서 자동화", completed: false },
        { id: "pe-3", text: "핵심 원페이지 스크린샷", description: "의사결정 시나리오가 담긴 단 한 장의 핵심 대시보드 배포용 자료 제작", completed: false },
        { id: "pe-4", text: "데이터 파이프라인", description: "UN SDGs API 및 주요 기후 데이터 소스 실시간 자동 수집 시스템 구축", completed: false },
        { id: "pe-5", text: "표준 거절 매뉴얼", description: "무리한 커스텀 요청 시 '차기 로드맵 반영'으로 대응하는 표준 거절 매뉴얼 수립", completed: false },
        { id: "pe-6", text: "보안 화이트페이퍼", description: "국제기구 보안 기준에 부합하는 데이터 프라이버시 준수 문서 공식 발간", completed: false },
        { id: "pe-7", text: "Self-Service 데모", description: "가이드 없이 링크만으로 가치를 느낄 수 있는 인터랙티브 데모 페이지 유지", completed: false },
        { id: "pe-8", text: "사내 모듈 아카이브", description: "개발된 시각화 모듈과 코드를 모듈화하여 재사용 가능한 자산 라이브러리화", completed: false }
      ]
    },
    {
      id: "authority",
      title: "3. 권위 (Authority)",
      color: "cell-category",
      items: [
        { id: "au-1", text: "글로벌 코스 제안", description: "링크드인 러닝 이력을 활용해 Coursera 및 O'Reilly 에디터에게 신규 코스 제안", completed: false },
        { id: "au-2", text: "심화 영문 실라버스", description: "AI 활용 기후 데이터 거버넌스 및 정책 수립 중심의 심화 영문 실라버스 완성", completed: false },
        { id: "au-3", text: "UNSSC 프로그램", description: "유엔시스템직원대학 교육 기준에 맞춘 '데이터 기반 정책 결정' 교육 프로그램 제안", completed: false },
        { id: "au-4", text: "Data Insights 숏폼", description: "복잡한 기후 데이터를 1분 내외로 해설하는 영상을 주 1회 링크드인/유튜브 업로드", completed: false },
        { id: "au-5", text: "정책 케이스 스터디", description: "수행 프로젝트를 가공하여 실제 정책 결정 과정을 담은 교육용 케이스 스터디 제작", completed: false },
        { id: "au-6", text: "데이터 철학 Manifesto", description: "Data to Wisdom 철학을 담은 PDF 전자책 발간하여 뉴스레터 구독자 확보", completed: false },
        { id: "au-7", text: "글로벌 초청 특강", description: "글로벌 대학/국제기구 초청 특강 연 2회 수락하여 '공인된 전문가' 증거 확보", completed: false },
        { id: "au-8", text: "전문가 커뮤니티", description: "수강생/고객용 디스코드 개설 및 월 1회 독점 데이터 리포트 제공 관리", completed: false }
      ]
    },
    {
      id: "capital",
      title: "4. 투자·자산 (Capital)",
      color: "cell-category",
      items: [
        { id: "ca-1", text: "BTC DCA 적립식", description: "매월 지정된 날짜에 감정을 배제하고 비트코인을 정해진 금액만큼 기계적 매수", completed: false },
        { id: "ca-2", text: "자산 시트 상품화", description: "직접 사용하는 투자 자산 관리 시트를 글로벌 채널에 $50 이상으로 판매 개시", completed: false },
        { id: "ca-3", text: "투자 로직 유료 리포트", description: "수익률이 아닌 데이터 기반 매수/매도 판단 로직을 정기 콘텐츠로 발행", completed: false },
        { id: "ca-4", text: "포트폴리오 비율 유지", description: "비트코인 80%, 달러 현금 20% 등 본인만의 비율 유지로 하락장 방어", completed: false },
        { id: "ca-5", text: "법인/개인 계좌 분리", description: "사업 법인과 개인 투자 계좌를 엄격히 분리하여 자산 흐름 투명성 확보", completed: false },
        { id: "ca-6", text: "주간 투자 리포트", description: "매주 일요일 저녁 거시경제와 기후 테크 시장을 분석한 개인 리포트 기록", completed: false },
        { id: "ca-7", text: "6개월 Runway 유보", description: "사업 수익의 30%는 운영비로 유보하여 최소 6개월의 현금 흐름 확보", completed: false },
        { id: "ca-8", text: "월간 리밸런싱", description: "월 1회 자산 현황 점검 후 설정 비율 이탈 시 기계적 리밸런싱 실시", completed: false }
      ]
    },
    {
      id: "leverage",
      title: "5. 브랜딩 (Leverage)",
      color: "cell-category",
      items: [
        { id: "le-1", text: "Daily 관점 노트", description: "매일 아침 뉴스 1개를 선정해 관점 3줄을 더해 링크드인 즉시 업로드", completed: false },
        { id: "le-2", text: "LinkedIn SEO 최적화", description: "헤드라인을 'Climate Data Strategist'로 고정하고 검색 키워드 배치", completed: false },
        { id: "le-3", text: "주간 X(트위터) 스레드", description: "주 1회 탄소 국경세 등 심화 주제를 깊게 파고드는 X 스레드 배포", completed: false },
        { id: "le-4", text: "실패와 거절 복기", description: "거절당한 제안이나 실패한 실험을 복기하여 '성장하는 전문가' 서사 공유", completed: false },
        { id: "le-5", text: "콘텐츠 OSMU", description: "블로그→링크드인→인스타→트위터로 이어지는 콘텐츠 재가공 시스템 가동", completed: false },
        { id: "le-6", text: "전문 댓글 Engagement", description: "타겟 담당자 글에 하루 3개 이상 통찰력 있는 댓글 달아 인지도 확보", completed: false },
        { id: "le-7", text: "베스트 뉴스레터", description: "한 달간의 최고 성과 콘텐츠를 선별해 이메일 뉴스레터 형식으로 발송", completed: false },
        { id: "le-8", text: "통합 Linktree 관리", description: "모든 SNS 프로필에 비즈니스 제안이 가능한 통합 링크 통일 배치", completed: false }
      ]
    },
    {
      id: "business",
      title: "6. 세일즈 (Business)",
      color: "cell-category",
      items: [
        { id: "bu-1", text: "영문 스크립트 5종", description: "문제-해결-증명 구조로 설계된 콜드메일 영문 스크립트 5종 완성", completed: false },
        { id: "bu-2", text: "HubSpot CRM", description: "잠재 고객 리스트 구축 및 연락 주기/협상 상태 실시간 관리", completed: false },
        { id: "bu-3", text: "유연한 Pricing B/C안", description: "할인 대신 범위를 축소하는 B안/C안 옵션을 즉시 제안할 준비", completed: false },
        { id: "bu-4", text: "하루 1번 거절당하기", description: "공격적인 제안을 위해 매일 1회 이상 거절 수령을 목표로 활동", completed: false },
        { id: "bu-5", text: "1시간 내 팔로업 메일", description: "미팅 종료 1시간 내 회의 요약 및 액션 아이템 감사 메일 발송", completed: false },
        { id: "bu-6", text: "반박 설득 로직 고도화", description: "'예산 부족' 등 거절 사유에 대한 논리적 반박 스크립트 고도화", completed: false },
        { id: "bu-7", text: "마지막 5분 Closing", description: "모든 미팅 마지막은 반드시 차기 액션에 대한 합의를 이끌고 종료", completed: false },
        { id: "bu-8", text: "미팅 녹음 복기", description: "실패한 미팅은 녹음본을 복기해 개선점 1가지를 추출하고 기록", completed: false }
      ]
    },
    {
      id: "operation",
      title: "7. 시스템 (Operation)",
      color: "cell-category",
      items: [
        { id: "op-1", text: "프롬프트 라이브러리", description: "코드 작성/메일/번역용 나만의 제미나이 프롬프트 라이브러리 구축", completed: false },
        { id: "op-2", text: "오전 4h Deep Work", description: "매일 8시~12시 딥워크 블록 처리 후 모든 알림과 외부 연락 차단", completed: false },
        { id: "op-3", text: "행정 업무 자동화", description: "견적서/세금 업무를 자동화 툴로 프로세스 간소화 및 최소화", completed: false },
        { id: "op-4", text: "파일 네이밍 규칙", description: "날짜_버전_내용 규칙 통일로 모든 파일 검색 시간 제로화", completed: false },
        { id: "op-5", text: "Inbox Zero", description: "퇴근 전 15분 할당하여 수신함을 처리/위임/삭제로 완벽히 비우기", completed: false },
        { id: "op-6", text: "SaaS 비용 최적화", description: "월 1회 정기 점검으로 실제 사용률 낮은 서비스 즉시 해지 관리", completed: false },
        { id: "op-7", text: "AI 업무 위임 극대화", description: "모든 타이핑/데이터 정리 업무를 직접 하지 않고 프롬프트로 위임", completed: false },
        { id: "op-8", text: "일요일 주간 복기", description: "지난주 성과 데이터 복기 및 차주 비효율 제거 계획 수립", completed: false }
      ]
    },
    {
      id: "foundation",
      title: "8. 건강 (Foundation)",
      color: "cell-category",
      items: [
        { id: "fo-1", text: "7시간 수면 사수", description: "취침/기상 시간을 일정하게 고정해 최상의 생체 리듬 사수", completed: false },
        { id: "fo-2", text: "주 4회 고강도 운동", description: "30분간 숨이 찰 정도의 러닝/웨이트로 기초 체력 에너지 확보", completed: false },
        { id: "fo-3", text: "기상 직후 햇빛 쬐기", description: "10분간 햇빛 노출로 멜라토닌 조절 및 정신 건강 리셋", completed: false },
        { id: "fo-4", text: "오후 2시 이후 노카페인", description: "숙면을 위해 2시 이후 카페인 엄금 및 허브티 대체", completed: false },
        { id: "fo-5", text: "브레인 포그 방지 식단", description: "정제 탄수화물/설탕 제한하여 오후 집중력 저하 방지", completed: false },
        { id: "fo-6", text: "뽀모도로 90/10 리듬", description: "90분 몰입 후 반드시 10분 완전 휴식하는 울트라디안 리듬 적용", completed: false },
        { id: "fo-7", text: "집중 환경 최적화", description: "책상 정리 및 최적 조명/온도 세팅으로 업무 몰입 환경 구축", completed: false },
        { id: "fo-8", text: "잡념의 즉시 실행 치환", description: "걱정이 들 때마다 즉시 코드 한 줄이나 메일 초안 작성으로 치환", completed: false }
      ]
    }
  ]
};

export const INITIAL_DATA_Q1_2026: MandalartData = {
  core: {
    title: "HARIM JUNG • THE ENGINE LAUNCH",
    subtitle: "2026 Q1 STRATEGIC SPRINT"
  },
  sections: [
    {
      id: "q1-product",
      title: "1. 제품 개발 (Engine MVP)",
      color: "cell-category",
      items: [
        { id: "q1-p-1", text: "기관 보고서 수집 파이프라인", description: "UN, IPCC, WorldBank 등 주요 기관의 최신 PDF 보고서를 자동으로 수집하는 파이프라인 완성", completed: false },
        { id: "q1-p-2", text: "3곳 이상 인용 RAG 챗봇", description: "질문 시 보고서 최소 3곳 이상을 정확히 인용하여 근거 있는 답변을 내놓는 기후 챗봇 구현", completed: false },
        { id: "q1-p-3", text: "시각화 대시보드 프로토타입", description: "텍스트 답변 내용을 즉시 지도나 차트 같은 시각적 대시보드로 변환하는 프로토타입 연동", completed: false },
        { id: "q1-p-4", text: "원문 페이지 즉시 연결", description: "모든 데이터 출처가 클릭 한 번으로 해당 문서의 원문 페이지로 연결되는 투명한 시스템 구축", completed: false },
        { id: "q1-p-5", text: "오픈 데모 링크 생성", description: "번거로운 가입 절차 없이 담당자가 즉시 데모를 경험할 수 있는 고유 오픈 링크 생성 기능", completed: false },
        { id: "q1-p-6", text: "의사결정용 인사이트 뷰", description: "복잡한 수치 나열이 아닌, 의사결정자가 바로 판단할 수 있는 ‘인사이트 뷰’ 화면 개발", completed: false },
        { id: "q1-p-7", text: "모바일 반응형 최적화", description: "현장 미팅 시 태블릿이나 폰으로 즉시 시연 가능하도록 모바일 반응형 UI 최적화 완료", completed: false },
        { id: "q1-p-8", text: "3월 31일 정식 배포", description: "완벽하지 않더라도 3월 31일 이전에는 무조건 v1.0 정식 배포 및 외부 공개", completed: false }
      ]
    },
    {
      id: "q1-leverage",
      title: "2. 플랫폼 레버리지",
      color: "cell-category",
      items: [
        { id: "q1-l-1", text: "Instructor Press Kit 제작", description: "현재 링크드인 러닝 강사 성과 지표를 담은 'Instructor Press Kit' 제작 및 Coursera 지원", completed: false },
        { id: "q1-l-2", text: "고부가가치 주제 확정", description: "단순 툴 강의를 넘어 'AI를 활용한 기후 데이터 시각화 및 정책 수립'으로 주제 확정", completed: false },
        { id: "q1-l-3", text: "의사결정 데이터 로직 설계", description: "툴 사용법 위주가 아닌 '의사결정자를 설득하는 데이터 로직' 중심의 10강 커리큘럼 설계", completed: false },
        { id: "q1-l-4", text: "영문 샘플 강의 제작", description: "글로벌 플랫폼 심사 통과를 위한 5분 분량의 고퀄리티 영문 샘플 강의 영상 제작 및 편집", completed: false },
        { id: "q1-l-5", text: "글로벌 강사 프로필 최적화", description: "모든 프로필에 막연한 명칭 대신 구체적인 전문 분야가 담긴 글로벌 강사 타이틀로 최적화", completed: false },
        { id: "q1-l-6", text: "국제기구 강의 이력 정리", description: "기존 UN 등 국제기구 강의 경력을 영문 이력서로 정교하게 정리하여 지원서에 포함", completed: false },
        { id: "q1-l-7", text: "글로벌 강사 네트워킹", description: "활동 중인 글로벌 데이터 강사들에게 제안서 피드백 요청 및 네트워킹 DM 발송", completed: false },
        { id: "q1-l-8", text: "강의 런칭 빌드업 공표", description: "강의 제작 및 기획 과정을 꾸준히 기록하여 '글로벌 강의 런칭 중'임을 링크드인에 공표", completed: false }
      ]
    },
    {
      id: "q1-partnership",
      title: "3. UN 파트너십",
      color: "cell-category",
      items: [
        { id: "q1-un-1", text: "UN 담당자 10명 명단 확보", description: "UNFCCC(독일 본) 및 UNSSC(이탈리아 토리노)의 데이터 및 교육 담당자 10명 명단 확보", completed: false },
        { id: "q1-un-2", text: "선물용 시각화 결과물 전달", description: "타겟 부서가 발행한 최신 보고서를 엔진에 넣어 시각화한 뒤 '선물용 결과물' 전달", completed: false },
        { id: "q1-un-3", text: "기술적 견해 중심 접근", description: "영업 미팅 대신 '너희 보고서를 분석해봤는데 전문가 의견을 달라'는 기술적 접근", completed: false },
        { id: "q1-un-4", text: "24h 엔진 수정 시연", description: "피드백 수신 시 요구사항을 즉시 반영하여 24시간 내 엔진을 수정해 보내는 속도 시연", completed: false },
        { id: "q1-un-5", text: "UN Roster 업데이트", description: "1월 중 UN Consultant Roster에 Visual Climate의 최신 포트폴리오 업데이트", completed: false },
        { id: "q1-un-6", text: "Technology Partner 명기", description: "제안서 최상단에 단순 납품업체가 아닌 'Technology Partner'라는 협력 관계 지위 명기", completed: false },
        { id: "q1-un-7", text: "기후 웨비나 네이밍 노출", description: "1분기 내 주요 기후 웨비나에 참석하여 날카로운 질문으로 담당자들에게 네이밍 노출", completed: false },
        { id: "q1-un-8", text: "파일럿 사용권 선제시", description: "진입 장벽을 없애기 위해 일정 기간 무료로 엔진을 써볼 수 있는 파일럿 사용권 선제시", completed: false }
      ]
    },
    {
      id: "q1-bip",
      title: "4. 빌드 인 퍼블릭",
      color: "cell-category",
      items: [
        { id: "q1-bp-1", text: "개발 해설 영상 주 3회", description: "개발 화면 녹화와 내 목소리 해설을 입힌 1~2분 분량의 영상을 주 3회 업로드", completed: false },
        { id: "q1-bp-2", text: "실패와 해결책 디테일 공유", description: "데이터 파이프라인 구축 중 겪은 실패와 해결책 등 실무자만 아는 디테일 공유", completed: false },
        { id: "q1-bp-3", text: "핵심 태그 알고리즘 타겟팅", description: "#ClimateTech, #AI, #VisualClimate 등 핵심 태그를 고정 사용하여 타겟팅", completed: false },
        { id: "q1-bp-4", text: "문제 제기형 Hook 사용", description: "'왜 수억 달러짜리 보고서가 PDF에 잠자고 있나?'와 같은 문제 제기형 첫 문장 사용", completed: false },
        { id: "q1-bp-5", text: "기술 공식 계정 태깅", description: "개발에 사용한 Gemini, LangChain 등 기술 공식 계정을 태그하여 글로벌 리포스팅 유도", completed: false },
        { id: "q1-bp-6", text: "월간 Dev Log 뉴스레터", description: "매달 한 번씩 개발 진척 상황을 요약한 'Dev Log'를 뉴스레터 형식으로 정리하여 배포", completed: false },
        { id: "q1-bp-7", text: "실시간 댓글 및 견해 소통", description: "내 답글은 1시간 내 완료하고, 타겟 인플루언서 글엔 기술적 견해 댓글 작성", completed: false },
        { id: "q1-bp-8", text: "정직한 여정 타임라인 관리", description: "담당자가 프로필을 눌렀을 때 '제품이 만들어지는 여정'이 타임라인에 꽉 차게 관리", completed: false }
      ]
    },
    {
      id: "q1-cashflow",
      title: "5. 투자 계정 (Cash Flow)",
      color: "cell-category",
      items: [
        { id: "q1-cf-1", text: "투자 전용 계정 개설", description: "비즈니스 브랜딩과 완전히 분리된 인스타그램 및 레드노트(샤오홍슈) 전용 계정 개설", completed: false },
        { id: "q1-cf-2", text: "데이터 투자 전문가 페르소나", description: "AI와 데이터를 활용해 시장을 분석하고 자산에 투자하는 전문가 페르소나 확립", completed: false },
        { id: "q1-cf-3", text: "엔진 분석 차트 요약", description: "엔진으로 분석한 BTC 및 자산 차트 화면을 캡처하고 본인만의 매수/매도 로직 요약", completed: false },
        { id: "q1-cf-4", text: "관리 시트 무료 배포 이벤트", description: "실제 사용하는 '투자 자산 관리 시트' 무료 배포 이벤트를 통해 초기 팔로워 확보", completed: false },
        { id: "q1-cf-5", text: "매일 아침 거시지표 업로드", description: "매일 아침 9시 장 시작 전, 거시경제 지표와 크립토 시장 관점 포스팅 고정 업로드", completed: false },
        { id: "q1-cf-6", text: "비주얼 중심 리소스 절감", description: "얼굴 노출 없이 데이터 화면과 화려한 차트 비주얼 위주로 구성하여 제작 리소스 절감", completed: false },
        { id: "q1-cf-7", text: "매주 금요일 매수 인증", description: "1분기 동안 매주 금요일 비트코인 및 ETF 기계적 매수 내역을 인증하여 꾸준함 증명", completed: false },
        { id: "q1-cf-8", text: "신뢰 자본 및 팬덤 형성", description: "3월 말까지 유료 템플릿이나 멤버십 판매가 가능할 정도의 팬덤과 신뢰 자본 형성", completed: false }
      ]
    },
    {
      id: "q1-sales",
      title: "6. 세일즈 (Aggressive)",
      color: "cell-category",
      items: [
        { id: "q1-s-1", text: "의사결정자 100명 리스트", description: "링크드인 Sales Navigator를 활용해 기후 펀드 및 기관 의사결정자 100명 리스트 추출", completed: false },
        { id: "q1-s-2", text: "데모 링크 중심 간결 DM", description: "무거운 제안서 대신 '모바일에서 바로 확인 가능한 데모 링크' 중심의 간결한 DM 발송", completed: false },
        { id: "q1-s-3", text: "모바일 로딩 실시간 체크", description: "담당자들의 90%가 폰으로 확인하므로 매일 아침 모바일 로딩 및 가독성 체크", completed: false },
        { id: "q1-s-4", text: "24h 후속 메시지 전송", description: "데모 링크 클릭 여부를 추적하고, 클릭한 담당자에게는 24시간 내 후속 메시지 전송", completed: false },
        { id: "q1-s-5", text: "무료 파일럿 유도", description: "예산 부족 거절에는 '피드백이 필요하니 무료 파일럿으로 써보라'며 실사용 유도", completed: false },
        { id: "q1-s-6", text: "AI 실무 교육 우회 제안", description: "교육 부서 담당자에게는 제품 대신 '기관 맞춤형 AI 실무 교육 커리큘럼'으로 제안", completed: false },
        { id: "q1-s-7", text: "금요일 스크립트 복기", description: "매주 금요일 실패한 세일즈 메시지를 복기하여 다음 주 스크립트의 문구/제안 수정", completed: false },
        { id: "q1-s-8", text: "매일 오후 3명 콜드 메시지", description: "주말 제외 매일 오후 정해진 시간에 최소 3명 이상에게 무조건 콜드 메시지 발송", completed: false }
      ]
    },
    {
      id: "q1-ops",
      title: "7. 시스템 (Efficiency)",
      color: "cell-category",
      items: [
        { id: "q1-o-1", text: "Cursor/Gemini 80% 자동화", description: "프론트엔드와 백엔드의 기본 코드는 Cursor 및 Gemini를 활용하여 80% 이상 자동 생성", completed: false },
        { id: "q1-o-2", text: "AI 스크래퍼 자동화", description: "수작업 수집 금지, 모든 데이터 수집 크롤러는 AI에게 코드를 짜게 하여 실행/자동화", completed: false },
        { id: "q1-o-3", text: "컴포넌트 라이브러리 활용", description: "디자인에 시간 쓰지 않기 위해 Tailwind UI 등 기성 컴포넌트 라이브러리 그대로 활용", completed: false },
        { id: "q1-o-4", text: "오전/오후 시간 블록 분리", description: "오전 8~12시는 개발(Deep Work), 오후 1~5시는 세일즈와 콘텐츠로 시간 분리", completed: false },
        { id: "q1-o-5", text: "집중 시간 알림 완전 차단", description: "오전 집중 시간에는 슬랙, 카톡, 메일 등 모든 SNS 알림 차단 및 로그아웃 유지", completed: false },
        { id: "q1-o-6", text: "DeepL/Gemini 영문 검수", description: "링크드인 및 영문 제안서는 DeepL과 Gemini로 초안 작성 후 정교하게 검수 진행", completed: false },
        { id: "q1-o-7", text: "API 비용 실시간 관리", description: "API 비용 및 서버비 월 한도를 설정하여 예산 밖 지출이 생기지 않도록 실시간 관리", completed: false },
        { id: "q1-o-8", text: "일요일 로드맵 100% 확정", description: "일요일 저녁 1시간은 다음 주 개발 로드맵과 콘텐츠 스케줄을 미리 100% 확정", completed: false }
      ]
    },
    {
      id: "q1-foundation",
      title: "8. 건강 (Survival)",
      color: "cell-category",
      items: [
        { id: "q1-f-1", text: "6시간 수면 리듬 사수", description: "새벽 1시 취침, 오전 7시 기상의 6시간 수면 리듬을 사수하여 뇌 최적 상태 유지", completed: false },
        { id: "q1-f-2", text: "고강도 인터벌 러닝", description: "집중력이 떨어지거나 머리가 막히면 무조건 운동화 신고 20분간 고강도 인터벌 러닝", completed: false },
        { id: "q1-f-3", text: "1시간 인공눈물/먼 산 보기", description: "모니터 주시가 길어지므로 1시간마다 인공눈물 및 5분간 먼 산 보기 강제 실시", completed: false },
        { id: "q1-f-4", text: "매일 아침 영양제 복용", description: "에너지 대사를 위한 비타민B군, 마그네슘, 오메가3를 매일 아침 식후 필수 복용", completed: false },
        { id: "q1-f-5", text: "2시간 스트레칭/환경 최적화", description: "허리와 목 건강을 위해 2시간마다 스트레칭 및 업무 공간 조명/온도 최적화", completed: false },
        { id: "q1-f-6", text: "저탄수화물 식단 대체", description: "식곤증과 브레인 포그 방지를 위해 점심은 가벼운 샐러드나 저탄수화물 샌드위치 대체", completed: false },
        { id: "q1-f-7", text: "토요일 신체 엔진 리셋", description: "토요일 하루는 개발에서 손을 떼고 등산이나 고강도 운동으로 신체 엔진 리셋", completed: false },
        { id: "q1-f-8", text: "잡념의 즉시 실행 치환", description: "막연한 걱정이 들 때마다 '일단 코드 한 줄만 더 쓰자'는 마인드로 즉시 실행 치환", completed: false }
      ]
    }
  ]
};
