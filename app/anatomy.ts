export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac'|'pregnancy';
export type AnatomySex = 'male'|'female';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'골격계',color:'#e2d9ba',description:'뼈는 몸을 지지하는 골격을 이루고 장기를 보호하며 근육이 부착되는 자리를 제공합니다. 뼈의 내부 조직은 무기질을 저장하고 혈구를 생성합니다.'},
 {id:'muscular',name:'근육계',color:'#a85b50',description:'골격근은 부착 부위를 당겨 움직임을 만듭니다. 힘줄과 함께 관절을 움직이고 자세를 안정시키며 열을 생성합니다.'},
 {id:'cardiac',name:'심장',color:'#b96760',description:'심장은 네 개의 방으로 이루어진 근육성 펌프입니다. 심장 판막은 혈액이 폐순환과 체순환을 따라 앞쪽으로 흐르도록 합니다.'},
 {id:'sensory',name:'감각기관',color:'#b0c8ce',description:'이 구조들은 시각, 청각, 평형감각과 같은 특수감각에 관여합니다. 특수화된 조직이 자극을 감지하고 신경계와 함께 정보를 전달합니다.'},
 {id:'arterial',name:'동맥',color:'#c05245',description:'심장은 혈액이 순환하도록 내보냅니다. 동맥은 심장에서 나온 혈액을 조직으로 운반하며, 폐순환에서는 폐로 운반합니다.'},
 {id:'venous',name:'정맥',color:'#527c9f',description:'정맥은 혈액을 심장으로 되돌려 보냅니다. 표재정맥과 심부정맥의 혈관망은 조직에서 혈액을 모으며, 폐정맥은 폐에서 산소가 풍부한 혈액을 심장으로 운반합니다.'},
 {id:'nervous',name:'신경계',color:'#d8b565',description:'뇌, 척수, 말초신경은 신호를 전달하고 처리합니다. 감각, 운동, 협응과 신체 기능의 자동 조절에 관여합니다.'},
 {id:'respiratory',name:'호흡계',color:'#b98991',description:'기도는 공기를 폐로 전달하며, 폐에서는 산소와 이산화탄소가 공기와 혈액 사이에서 교환됩니다. 호흡은 호흡근이 만드는 압력 변화로 이루어집니다.'},
 {id:'digestive',name:'소화계',color:'#b8916b',description:'소화관은 음식을 분해하고 영양소와 물을 흡수하며 노폐물을 이동시킵니다. 부속 소화기관은 담즙과 소화효소를 공급합니다.'},
 {id:'urinary',name:'비뇨계',color:'#b47961',description:'신장은 혈액을 여과하고 체액, 전해질, 산-염기 균형을 조절합니다. 소변은 요관을 거쳐 방광에 저장된 뒤 요도를 통해 배출됩니다.'},
 {id:'lymphatic',name:'림프계',color:'#879f7c',description:'림프관은 조직에 남은 과도한 체액을 순환계로 되돌립니다. 림프절과 다른 림프기관은 면역 감시와 면역 반응에 관여합니다.'},
 {id:'endocrine',name:'내분비계',color:'#c5a09a',description:'내분비기관은 호르몬을 혈액으로 분비해 대사, 성장, 스트레스 반응, 생식 등의 과정을 조절합니다.'},
 {id:'reproductive',name:'생식계',color:'#bda098',description:'생식기관은 생식세포와 성호르몬의 생성, 성숙, 운반에 관여합니다. 모델에 따라 표시되는 구조가 다릅니다.'},
 {id:'integumentary',name:'신체 표면',color:'#ba9b7d',description:'신체 표면은 외부 해부학적 기준을 제공합니다. 외피계는 보호 장벽을 형성하며 감각과 체온 조절에 관여합니다.'},
 {id:'pregnancy',name:'임신 참고 구조',color:'#b88380',description:'태반과 탯줄은 임신 중 모체와 태아 사이의 물질 교환에 관여합니다. 여성 기준 모델에서 기본 해부 구조와 분리해 제공합니다.'},
 {id:'connective',name:'결합조직',color:'#aec3bb',description:'연골, 인대와 그 밖의 결합조직은 구조물을 지지하고 연결하며 서로 구분합니다. 관절을 안정시키고 기계적 하중을 분산하는 역할도 합니다.'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:AnatomySex;source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
 'uterus':'골반 안에 있는 속이 빈 근육성 장기입니다. 안쪽 벽은 월경 주기에 따라 변하며 임신 중 착상과 발달을 지지할 수 있습니다.',
 'vagina':'자궁경부와 몸 바깥을 연결하는 근육성 통로입니다. 월경혈이 지나가며 출산 통로의 일부를 이룹니다.',
 'ovary':'발달 중인 난모세포를 포함하고 에스트로겐과 프로게스테론 등의 호르몬을 만드는 장기입니다.',
 'heart':'가슴 안에 있는 근육성 펌프입니다. 오른쪽은 혈액을 폐로 보내고, 왼쪽은 혈액을 체순환으로 보냅니다.',
 'liver':'횡격막 오른쪽 아래에 있는 큰 장기입니다. 흡수된 영양소를 처리하고 담즙을 만들며, 혈액으로 운반되는 여러 단백질을 합성합니다.',
 'brain':'신경계의 중추 기관입니다. 서로 연결된 영역들이 지각, 운동, 기억, 언어와 신체 기능 조절에 관여합니다.',
 'stomach':'식도와 소장 사이에 있는 근육성 주머니입니다. 음식물을 저장하고 위산 및 효소와 섞은 뒤 십이지장으로 내보냅니다.',
 'spleen':'왼쪽 상복부에 있는 림프기관입니다. 혈액을 여과하고 노화된 혈구를 제거하며 면역 반응에 관여합니다.',
 'pancreas':'소화 기능과 내분비 기능을 함께 담당하는 복부 장기입니다. 소장에 소화효소를 공급하고 인슐린과 글루카곤 등의 호르몬을 분비합니다.',
 'urinary bladder':'골반 안에 있는 근육성 저장 기관으로, 신장에서 요관을 통해 내려온 소변을 저장합니다.',
 'trachea':'후두와 기관지를 연결하는 주 기도입니다. 연골 구조가 호흡 중에도 기도가 열린 상태를 유지하도록 지지합니다.',
 'diaphragm':'가슴과 배를 나누는 넓은 근육입니다. 수축하면 흉강의 부피가 늘어나 공기가 폐로 들어오도록 돕습니다.',
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
