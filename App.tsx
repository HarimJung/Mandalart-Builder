
import React, { useState, useEffect } from 'react';
import { INITIAL_DATA_2026, INITIAL_DATA_Q1_2026 } from './constants';
import { MandalartData, MandalartSection, MandalartCell } from './types';

// 개별 만다라트 보드를 렌더링하는 내부 컴포넌트
const MandalartBoard: React.FC<{
  data: MandalartData;
  storageKey: string;
  onUpdate: (newData: MandalartData) => void;
}> = ({ data, storageKey, onUpdate }) => {
  const [flippedCells, setFlippedCells] = useState<Set<string>>(new Set());
  const [editModal, setEditModal] = useState<{ sectionId: string | 'master', itemId: string | 'master', text: string, description?: string } | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedCells(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleComplete = (sectionId: string, itemId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newData = {
      ...data,
      sections: data.sections.map(s => s.id === sectionId ? {
        ...s,
        items: s.items.map(i => i.id === itemId ? { ...i, completed: !i.completed } : i)
      } : s)
    };
    onUpdate(newData);
  };

  const saveEdit = () => {
    if (!editModal) return;
    let newData: MandalartData;
    if (editModal.sectionId === 'master') {
      newData = { ...data, core: { ...data.core, title: editModal.text } };
    } else {
      newData = {
        ...data,
        sections: data.sections.map(s => s.id === editModal.sectionId ? {
          ...s,
          items: s.items.map(i => i.id === editModal.itemId ? { ...i, text: editModal.text, description: editModal.description || '' } : i)
        } : s)
      };
    }
    onUpdate(newData);
    setEditModal(null);
  };

  const renderCell = (sectionId: string, item: MandalartCell | { id: string, text: string, completed: boolean, description?: string }, isCategory: boolean = false, isMaster: boolean = false) => {
    const isFlipped = flippedCells.has(item.id);
    const cellClass = `
      flip-card-front 
      ${isCategory ? 'cell-category' : ''} 
      ${isMaster ? 'cell-master' : ''} 
      ${item.completed ? 'cell-completed' : ''}
    `;

    return (
      <div
        key={item.id}
        className={`flip-card ${isFlipped ? 'is-flipped' : ''}`}
        onClick={() => toggleFlip(item.id)}
        onContextMenu={(e) => {
          e.preventDefault();
          setEditModal({ sectionId: isMaster ? 'master' : sectionId, itemId: isMaster ? 'master' : item.id, text: item.text, description: item.description });
        }}
      >
        <div className="flip-card-inner">
          <div className={cellClass}>
            <span className="p-1">{item.text}</span>
            {isMaster && <span className="text-[8px] text-lime-400 mt-1 uppercase opacity-60">{data.core.subtitle}</span>}
          </div>
          <div className="flip-card-back">
            <div className="font-black text-[7px] text-lime-400 uppercase mb-1 border-b border-white/20 pb-0.5">{item.text}</div>
            <div className="flex-1 overflow-y-auto leading-tight pr-1 mb-2">
              {item.description || "No details provided."}
            </div>
            {!isCategory && !isMaster && (
              <button
                onClick={(e) => toggleComplete(sectionId, item.id, e)}
                className={`w-full py-1 text-[7px] font-black uppercase rounded ${item.completed ? 'bg-red-600' : 'bg-lime-400 text-black'}`}
              >
                {item.completed ? 'Cancel' : 'Complete'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderBlock = (section: MandalartSection) => {
    const cells = [];
    let itemPtr = 0;
    for (let i = 0; i < 9; i++) {
      if (i === 4) {
        cells.push(renderCell(section.id, { id: section.id + '-cat', text: section.title, completed: false, description: "Category Header" }, true));
      } else {
        cells.push(renderCell(section.id, section.items[itemPtr++]));
      }
    }
    return <div key={section.id} className="mandalart-block">{cells}</div>;
  };

  const renderMasterBlock = () => {
    const cells = [];
    const mapping = [0, 1, 2, 3, -1, 4, 5, 6, 7];
    for (let i = 0; i < 9; i++) {
      const secIdx = mapping[i];
      if (secIdx === -1) {
        cells.push(renderCell('master', { id: 'master-goal-' + storageKey, text: data.core.title, completed: false, description: "Ultimate Strategic Goal" }, false, true));
      } else {
        const section = data.sections[secIdx];
        cells.push(renderCell(section.id, { id: section.id + '-ref-' + storageKey, text: section.title, completed: false, description: "Section Reference" }, true));
      }
    }
    return <div key="master-block" className="mandalart-block">{cells}</div>;
  };

  return (
    <div className="mb-20 w-full flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6 px-2">
        <div>
          <h2 className="text-xl font-black text-black tracking-tighter uppercase">{data.core.title}</h2>
          <p className="text-[9px] text-gray-400 font-bold tracking-widest">{data.core.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => { if (confirm('Reset this board?')) onUpdate(storageKey === '2026-overall-v2' ? INITIAL_DATA_2026 : INITIAL_DATA_Q1_2026) }} className="text-[8px] font-black uppercase border border-gray-200 px-3 py-1 hover:bg-gray-50">Reset Board</button>
        </div>
      </div>

      <main className="mandalart-container">
        {renderBlock(data.sections[0])}
        {renderBlock(data.sections[1])}
        {renderBlock(data.sections[2])}
        {renderBlock(data.sections[3])}
        {renderMasterBlock()}
        {renderBlock(data.sections[4])}
        {renderBlock(data.sections[5])}
        {renderBlock(data.sections[6])}
        {renderBlock(data.sections[7])}
      </main>

      <footer className="mt-8 w-full grid grid-cols-2 md:grid-cols-4 gap-3 controls">
        {data.sections.map(s => {
          const count = s.items.filter(i => i.completed).length;
          return (
            <div key={s.id} className="bg-white border-l-4 border-lime-400 p-3 shadow-sm">
              <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{s.title}</div>
              <div className="text-md font-black mt-1">{Math.round((count / 8) * 100)}% <span className="text-[9px] text-gray-400 ml-1">({count}/8)</span></div>
            </div>
          );
        })}
      </footer>

      {editModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-[200] flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-black p-5 flex justify-between items-center">
              <h3 className="text-xs font-black uppercase tracking-widest text-white">Edit Strategy Node</h3>
              <button onClick={() => setEditModal(null)} className="text-white/50 hover:text-white">&times;</button>
            </div>
            <div className="p-8">
              <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Action Node Name</label>
              <input
                autoFocus
                className="w-full border-2 border-gray-100 rounded-lg p-3 text-lg font-black focus:border-black outline-none mb-6"
                value={editModal.text}
                onChange={(e) => setEditModal({ ...editModal, text: e.target.value })}
              />
              <label className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Instruction / Description</label>
              <textarea
                className="w-full border-2 border-gray-100 rounded-lg p-3 text-sm font-medium focus:border-black outline-none min-h-[150px] resize-none"
                value={editModal.description}
                onChange={(e) => setEditModal({ ...editModal, description: e.target.value })}
              />
              <div className="flex justify-end gap-4 mt-8">
                <button onClick={() => setEditModal(null)} className="px-6 py-2 text-xs font-black text-gray-400 uppercase">Cancel</button>
                <button onClick={saveEdit} className="px-10 py-2 bg-black text-white text-xs font-black uppercase rounded-lg shadow-xl hover:bg-gray-800">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [overallData, setOverallData] = useState<MandalartData>(() => {
    const saved = localStorage.getItem('harim-overall-2026-v2');
    return saved ? JSON.parse(saved) : INITIAL_DATA_2026;
  });

  const [q1Data, setQ1Data] = useState<MandalartData>(() => {
    const saved = localStorage.getItem('harim-q1-2026-v2');
    return saved ? JSON.parse(saved) : INITIAL_DATA_Q1_2026;
  });

  useEffect(() => {
    localStorage.setItem('harim-overall-2026-v2', JSON.stringify(overallData));
  }, [overallData]);

  useEffect(() => {
    localStorage.setItem('harim-q1-2026-v2', JSON.stringify(q1Data));
  }, [q1Data]);

  return (
    <div className="flex flex-col items-center">
      <header className="w-full flex justify-between items-end mb-12 controls border-b-2 border-black pb-4">
        <div>
          <h1 className="text-5xl font-black text-black tracking-tighter leading-none">HARIM JUNG</h1>
          <p className="text-[12px] text-gray-600 font-black uppercase tracking-[0.4em] mt-3">Executive Strategic Engine 2026</p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => window.print()} className="bg-black text-white px-8 py-3 rounded-md text-[11px] font-black uppercase tracking-wider shadow-2xl hover:bg-gray-800 transition-all">Export Report PDF</button>
        </div>
      </header>

      {/* 2026 Overall Board */}
      <section className="w-full">
        <div className="text-center mb-4">
          <span className="bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Part 1: 2026 Annual Overview</span>
        </div>
        <MandalartBoard
          data={overallData}
          storageKey="2026-overall-v2"
          onUpdate={setOverallData}
        />
      </section>

      {/* Q1 Sprint Board */}
      <section className="w-full">
        <div className="text-center mb-4">
          <span className="bg-[#d4e11e] text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">Part 2: 2026 Q1 Sprint - Engine Launch</span>
        </div>
        <MandalartBoard
          data={q1Data}
          storageKey="2026-q1-v2"
          onUpdate={setQ1Data}
        />
      </section>

      <div className="mt-8 text-gray-400 text-[10px] font-black uppercase tracking-[0.6em] pb-20 controls">
        &copy; 2026 THE STANDARD • EXECUTION IS THE ONLY STRATEGY
      </div>
    </div>
  );
};

export default App;
