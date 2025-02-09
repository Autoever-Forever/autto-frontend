export const mockProducts = [
  {
    id: "1",
    title: "오페라의 유령",
    posterUrl: "https://picsum.photos/300/400",
    location: "예술의전당",
    performStartDate: "2024-03-01",
    performEndDate: "2024-04-30",
    runningTime: "180분",
    price: 120000,
    ticketLimit: 4,
    inventory: 50
  },
  {
    id: "2",
    title: "레미제라블",
    posterUrl: "https://picsum.photos/300/401",
    location: "블루스퀘어",
    performStartDate: "2024-03-15",
    performEndDate: "2024-05-15",
    runningTime: "165분",
    price: 140000,
    ticketLimit: 4,
    inventory: 30
  },
  {
    id: "3",
    title: "캣츠",
    posterUrl: "https://picsum.photos/300/402",
    location: "샤롯데씨어터",
    performStartDate: "2024-04-01",
    performEndDate: "2024-06-30",
    runningTime: "150분",
    price: 110000,
    ticketLimit: 4,
    inventory: 40
  },
  {
    id: "4",
    title: "라이온 킹",
    posterUrl: "https://picsum.photos/300/403",
    location: "디큐브아트센터",
    performStartDate: "2024-03-20",
    performEndDate: "2024-05-31",
    runningTime: "170분",
    price: 130000,
    ticketLimit: 4,
    inventory: 45
  },
  {
    id: "5",
    title: "지킬 앤 하이드",
    posterUrl: "https://picsum.photos/300/404",
    location: "충무아트센터",
    performStartDate: "2024-04-05",
    performEndDate: "2024-06-15",
    runningTime: "160분",
    price: 125000,
    ticketLimit: 4,
    inventory: 35
  },
  {
    id: "6",
    title: "맘마미아",
    posterUrl: "https://picsum.photos/300/405",
    location: "세종문화회관",
    performStartDate: "2024-03-25",
    performEndDate: "2024-05-30",
    runningTime: "155분",
    price: 115000,
    ticketLimit: 4,
    inventory: 55
  },
  {
    id: "7",
    title: "아이다",
    posterUrl: "https://picsum.photos/300/406",
    location: "블루스퀘어",
    performStartDate: "2024-04-10",
    performEndDate: "2024-06-20",
    runningTime: "175분",
    price: 135000,
    ticketLimit: 4,
    inventory: 42
  },
  {
    id: "8",
    title: "시카고",
    posterUrl: "https://picsum.photos/300/407",
    location: "샤롯데씨어터",
    performStartDate: "2024-03-30",
    performEndDate: "2024-05-25",
    runningTime: "145분",
    price: 128000,
    ticketLimit: 4,
    inventory: 38
  },
  {
    id: "9",
    title: "노트르담 드 파리",
    posterUrl: "https://picsum.photos/300/408",
    location: "블루스퀘어",
    performStartDate: "2024-04-15",
    performEndDate: "2024-06-25",
    runningTime: "165분",
    price: 132000,
    ticketLimit: 4,
    inventory: 48
  },
  {
    id: "10",
    title: "웨스트 사이드 스토리",
    posterUrl: "https://picsum.photos/300/409",
    location: "예술의전당",
    performStartDate: "2024-05-01",
    performEndDate: "2024-07-15",
    runningTime: "170분",
    price: 138000,
    ticketLimit: 4,
    inventory: 52
  },
  {
    id: "11",
    title: "드라큘라",
    posterUrl: "https://picsum.photos/300/410",
    location: "충무아트센터",
    performStartDate: "2024-04-20",
    performEndDate: "2024-06-30",
    runningTime: "155분",
    price: 125000,
    ticketLimit: 4,
    inventory: 45
  },
  {
    id: "12",
    title: "모차르트!",
    posterUrl: "https://picsum.photos/300/411",
    location: "샤롯데씨어터",
    performStartDate: "2024-05-10",
    performEndDate: "2024-07-20",
    runningTime: "160분",
    price: 130000,
    ticketLimit: 4,
    inventory: 40
  },
  {
    id: "13",
    title: "엘리자벳",
    posterUrl: "https://picsum.photos/300/412",
    location: "블루스퀘어",
    performStartDate: "2024-05-15",
    performEndDate: "2024-07-30",
    runningTime: "175분",
    price: 142000,
    ticketLimit: 4,
    inventory: 55
  },
  {
    id: "14",
    title: "헤드윅",
    posterUrl: "https://picsum.photos/300/413",
    location: "홍익대 대학로 아트센터",
    performStartDate: "2024-04-25",
    performEndDate: "2024-06-28",
    runningTime: "140분",
    price: 118000,
    ticketLimit: 4,
    inventory: 35
  },
  {
    id: "15",
    title: "스위니 토드",
    posterUrl: "https://picsum.photos/300/414",
    location: "세종문화회관",
    performStartDate: "2024-05-20",
    performEndDate: "2024-07-25",
    runningTime: "165분",
    price: 135000,
    ticketLimit: 4,
    inventory: 50
  },
  {
    id: "16",
    title: "미스 사이공",
    posterUrl: "https://picsum.photos/300/415",
    location: "예술의전당",
    performStartDate: "2024-06-01",
    performEndDate: "2024-08-15",
    runningTime: "180분",
    price: 145000,
    ticketLimit: 4,
    inventory: 60
  }
];

export const mockReservations = [
  {
    reservationId: "R001",
    createdDate: "2024-03-01T14:30:00",
    ticketDate: "2024-03-15T19:30:00",
    status: "ACTIVE",
    title: "오페라의 유령",
    thumbnailUrl: "https://picsum.photos/300/400",
    seatCount: 2,
    price: 240000
  },
  {
    reservationId: "R002",
    createdDate: "2024-03-02T11:20:00",
    ticketDate: "2024-03-20T19:30:00",
    status: "CANCELLED",
    title: "레미제라블",
    thumbnailUrl: "https://picsum.photos/300/401",
    seatCount: 3,
    price: 420000
  },
  {
    reservationId: "R003",
    createdDate: "2024-03-03T15:45:00",
    ticketDate: "2024-04-01T19:00:00",
    status: "ACTIVE",
    title: "캣츠",
    thumbnailUrl: "https://picsum.photos/300/402",
    seatCount: 2,
    price: 220000
  },
  {
    reservationId: "R004",
    createdDate: "2024-03-04T10:15:00",
    ticketDate: "2024-03-30T14:00:00",
    status: "ACTIVE",
    title: "시카고",
    thumbnailUrl: "https://picsum.photos/300/407",
    seatCount: 4,
    price: 512000
  }
];

export const mockUser = {
  email: "test@example.com",
  name: "테스트 사용자",
  token: "mock-jwt-token-123456789",
  accessToken: "mock-jwt-token-123456789"
};

export const mockReservationDetails = {
  "R001": {
    reservationId: "R001",
    title: "오페라의 유령",
    location: "예술의전당",
    ticketDate: "2024-03-15T19:30:00",
    price: 120000,
    seatCount: 2,
    seatsPrice: 240000,
    status: "ACTIVE",
    createdDate: "2024-03-01T14:30:00",
    posterUrl: "https://picsum.photos/300/400"
  },
  "R002": {
    reservationId: "R002",
    title: "레미제라블",
    location: "블루스퀘어",
    ticketDate: "2024-03-20T19:30:00",
    price: 140000,
    seatCount: 3,
    seatsPrice: 420000,
    status: "CANCELLED",
    createdDate: "2024-03-02T11:20:00",
    posterUrl: "https://picsum.photos/300/401"
  },
  "R003": {
    reservationId: "R003",
    title: "캣츠",
    location: "샤롯데씨어터",
    ticketDate: "2024-04-01T19:00:00",
    price: 110000,
    seatCount: 2,
    seatsPrice: 220000,
    status: "ACTIVE",
    createdDate: "2024-03-03T15:45:00",
    posterUrl: "https://picsum.photos/300/402"
  },
  "R004": {
    reservationId: "R004",
    title: "시카고",
    location: "샤롯데씨어터",
    ticketDate: "2024-03-30T14:00:00",
    price: 128000,
    seatCount: 4,
    seatsPrice: 512000,
    status: "ACTIVE",
    createdDate: "2024-03-04T10:15:00",
    posterUrl: "https://picsum.photos/300/407"
  }
};

export const mockInventory = {
  "1": {
    dates: [
      {
        date: "2024-03-15",
        inventory: 50,
        price: 120000,
        seatId: "SEAT-1",
        title: "오페라의 유령",
        location: "예술의전당",
        performStartDate: "2024-03-01",
        performEndDate: "2024-04-30"
      }
    ]
  },
  "2": {
    dates: [
      {
        date: "2024-03-20",
        inventory: 30,
        price: 140000,
        seatId: "SEAT-2",
        title: "레미제라블",
        location: "블루스퀘어",
        performStartDate: "2024-03-15",
        performEndDate: "2024-05-15"
      }
    ]
  },
  "3": {
    dates: [{
      date: "2024-04-01",
      inventory: 40,
      price: 110000,
      seatId: "SEAT-3",
      title: "캣츠",
      location: "샤롯데씨어터",
      performStartDate: "2024-04-01",
      performEndDate: "2024-06-30"
    }]
  },
  "4": {
    dates: [{
      date: "2024-03-20",
      inventory: 45,
      price: 130000,
      seatId: "SEAT-4",
      title: "라이온 킹",
      location: "디큐브아트센터",
      performStartDate: "2024-03-20",
      performEndDate: "2024-05-31"
    }]
  },
  "5": {
    dates: [{
      date: "2024-04-05",
      inventory: 35,
      price: 125000,
      seatId: "SEAT-5",
      title: "지킬 앤 하이드",
      location: "충무아트센터",
      performStartDate: "2024-04-05",
      performEndDate: "2024-06-15"
    }]
  },
  "6": {
    dates: [{
      date: "2024-03-25",
      inventory: 55,
      price: 115000,
      seatId: "SEAT-6",
      title: "맘마미아",
      location: "세종문화회관",
      performStartDate: "2024-03-25",
      performEndDate: "2024-05-30"
    }]
  },
  "7": {
    dates: [{
      date: "2024-04-10",
      inventory: 42,
      price: 135000,
      seatId: "SEAT-7",
      title: "아이다",
      location: "블루스퀘어",
      performStartDate: "2024-04-10",
      performEndDate: "2024-06-20"
    }]
  },
  "8": {
    dates: [{
      date: "2024-03-30",
      inventory: 38,
      price: 128000,
      seatId: "SEAT-8",
      title: "시카고",
      location: "샤롯데씨어터",
      performStartDate: "2024-03-30",
      performEndDate: "2024-05-25"
    }]
  },
  "9": {
    dates: [{
      date: "2024-04-15",
      inventory: 48,
      price: 132000,
      seatId: "SEAT-9",
      title: "노트르담 드 파리",
      location: "블루스퀘어",
      performStartDate: "2024-04-15",
      performEndDate: "2024-06-25"
    }]
  },
  "10": {
    dates: [{
      date: "2024-05-01",
      inventory: 52,
      price: 138000,
      seatId: "SEAT-10",
      title: "웨스트 사이드 스토리",
      location: "예술의전당",
      performStartDate: "2024-05-01",
      performEndDate: "2024-07-15"
    }]
  },
  "11": {
    dates: [{
      date: "2024-04-20",
      inventory: 45,
      price: 125000,
      seatId: "SEAT-11",
      title: "드라큘라",
      location: "충무아트센터",
      performStartDate: "2024-04-20",
      performEndDate: "2024-06-30"
    }]
  },
  "12": {
    dates: [{
      date: "2024-05-10",
      inventory: 40,
      price: 130000,
      seatId: "SEAT-12",
      title: "모차르트!",
      location: "샤롯데씨어터",
      performStartDate: "2024-05-10",
      performEndDate: "2024-07-20"
    }]
  },
  "13": {
    dates: [{
      date: "2024-05-15",
      inventory: 55,
      price: 142000,
      seatId: "SEAT-13",
      title: "엘리자벳",
      location: "블루스퀘어",
      performStartDate: "2024-05-15",
      performEndDate: "2024-07-30"
    }]
  },
  "14": {
    dates: [{
      date: "2024-04-25",
      inventory: 35,
      price: 118000,
      seatId: "SEAT-14",
      title: "헤드윅",
      location: "홍익대 대학로 아트센터",
      performStartDate: "2024-04-25",
      performEndDate: "2024-06-28"
    }]
  },
  "15": {
    dates: [{
      date: "2024-05-20",
      inventory: 50,
      price: 135000,
      seatId: "SEAT-15",
      title: "스위니 토드",
      location: "세종문화회관",
      performStartDate: "2024-05-20",
      performEndDate: "2024-07-25"
    }]
  },
  "16": {
    dates: [{
      date: "2024-06-01",
      inventory: 60,
      price: 145000,
      seatId: "SEAT-16",
      title: "미스 사이공",
      location: "예술의전당",
      performStartDate: "2024-06-01",
      performEndDate: "2024-08-15"
    }]
  }
};