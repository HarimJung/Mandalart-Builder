
export interface MandalartCell {
  id: string;
  text: string;
  description: string; // 상세 설명 필드 추가
  completed: boolean;
  isCategoryHeader?: boolean;
}

export interface MandalartSection {
  id: string;
  title: string;
  color: string;
  items: MandalartCell[];
}

export interface MandalartData {
  core: {
    title: string;
    subtitle: string;
  };
  sections: MandalartSection[];
}
