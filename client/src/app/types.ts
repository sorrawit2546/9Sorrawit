// อาจจะอยู่ในไฟล์ types.ts
export interface ApiNote {
  id: string;
  title: string;
  content?: string | null; // เนื้อหาอาจเป็น null จากฐานข้อมูล
  createdAt: string; // หรือ Date ถ้ามีการแปลง
  updatedAt: string; // หรือ Date
}

export interface ApiLink {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  label?: string | null;
}

// Types สำหรับข้อมูลที่ได้จาก /api/graph/data
export interface ApiGraphNodeData {
  label: string;
  originalData: ApiNote;
}

export interface ApiGraphNode {
  id: string;
  data: ApiGraphNodeData;
  position?: { x: number; y: number }; // position อาจจะถูกสร้างจาก frontend ถ้า backend ไม่ได้ส่งมา
  type?: string;
}

export interface ApiGraphEdge {
  id:string;
  source: string;
  target: string;
  label?: string | null;
  type?: string;
}

export interface GraphDataResponse {
  nodes: ApiGraphNode[];
  edges: ApiGraphEdge[];
}

// Types สำหรับ React Flow
// React Flow มี types ของตัวเอง เช่น Node, Edge ซึ่งเราจะใช้
// แต่ data property ภายใน Node<T> จะเป็น T ของเรา
export interface ReactFlowNodeData {
  label: string;
  originalData: ApiNote; // เก็บข้อมูลดิบจาก API ไว้
}