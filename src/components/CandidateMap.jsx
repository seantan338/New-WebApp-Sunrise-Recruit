import React, { useState } from 'react';
import { Coins, Map, User, Check, Lock, ChevronRight, Trophy, Zap, Star } from 'lucide-react';

// --- 数据结构 (模拟从 Firebase 获取的数据) ---
const INITIAL_TOKENS = 150;

const STAGES = [
  {
    id: 1,
    title: '简历解析完成',
    description: 'AI 已成功提取您的核心技能！',
    reward: 50,
    status: 'completed', // completed, active, locked
    icon: <Check size={24} className="text-green-600" />,
    color: 'bg-green-400',
  },
  {
    id: 2,
    title: '生成技能蜘蛛图',
    description: '查看您在市场上的竞争力并领取 Token。',
    reward: 100,
    status: 'active',
    icon: <Zap size={24} className="text-yellow-600" />,
    color: 'bg-yellow-400',
  },
  {
    id: 3,
    title: '投递首个职位',
    description: '使用 Token 解锁高薪职位并投递。',
    reward: 200,
    status: 'locked',
    icon: <Lock size={24} className="text-gray-500" />,
    color: 'bg-gray-200',
  },
  {
    id: 4,
    title: '首轮面试',
    description: '获得雇主邀请并完成线上面试。',
    reward: 500,
    status: 'locked',
    icon: <Lock size={24} className="text-gray-500" />,
    color: 'bg-gray-200',
  },
  {
    id: 5,
    title: '成功入职 (Boss 关卡)',
    description: '恭喜！获得入职大礼包与终极 Token！',
    reward: 2000,
    status: 'locked',
    icon: <Trophy size={32} className="text-white" />,
    color: 'bg-red-500',
    isBoss: true,
  },
];

export default function CandidateApp() {
  const [tokens, setTokens] = useState(INITIAL_TOKENS);
  const [stages, setStages] = useState(STAGES);
  const [selectedStage, setSelectedStage] = useState(null);

  // 模拟完成任务的逻辑
  const handleCompleteTask = (stageId, reward) => {
    setTokens((prev) => prev + reward);
    
    setStages((prevStages) => {
      const newStages = [...prevStages];
      const currentIndex = newStages.findIndex((s) => s.id === stageId);
      
      // 当前任务标记为完成
      newStages[currentIndex].status = 'completed';
      newStages[currentIndex].icon = <Check size={24} className="text-green-600" />;
      newStages[currentIndex].color = 'bg-green-400';

      // 下一个任务解锁为 active
      if (currentIndex + 1 < newStages.length) {
        newStages[currentIndex + 1].status = 'active';
        newStages[currentIndex + 1].icon = <Zap size={24} className="text-yellow-600" />;
        newStages[currentIndex + 1].color = 'bg-yellow-400';
      }
      return newStages;
    });
    
    setSelectedStage(null); // 关闭弹窗
  };

  return (
    <div className="min-h-screen bg-blue-50 font-sans text-gray-900 pb-20 overflow-hidden relative">
      
      {/* --- 顶部导航栏 (Header) --- */}
      <header className="bg-white border-b-4 border-gray-900 p-4 sticky top-0 z-40 flex justify-between items-center shadow-[0_4px_0_0_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-400 rounded-full border-2 border-gray-900 shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
            <User size={24} className="text-gray-900" />
          </div>
          <div>
            <h1 className="font-bold text-xl leading-tight text-gray-900">Alex Candidate</h1>
            <p className="text-xs font-bold text-purple-600 uppercase tracking-wider">Level 2 Seeker</p>
          </div>
        </div>
        <div className="bg-yellow-300 border-2 border-gray-900 shadow-[2px_2px_0_0_rgba(0,0,0,1)] rounded-xl px-4 py-2 flex items-center gap-2">
          <Coins size={20} className="text-yellow-700" />
          <span className="font-extrabold text-lg">{tokens}</span>
        </div>
      </header>

      {/* --- 页面标题 --- */}
      <div className="px-6 py-8 text-center">
        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">
          Career Quest Map
        </h2>
        <p className="text-gray-600 font-medium">Complete stages to earn tokens and get hired!</p>
      </div>

      {/* --- 游戏化路线图 (Gamified Map) --- */}
      <div className="max-w-md mx-auto px-6 relative">
        {/* 背景虚线连接线 */}
        <div className="absolute left-1/2 top-10 bottom-10 w-2 bg-gray-900 -translate-x-1/2 rounded-full opacity-20"></div>

        <div className="flex flex-col gap-12">
          {stages.map((stage, index) => {
            const isLeft = index % 2 === 0;
            const isCompleted = stage.status === 'completed';
            const isActive = stage.status === 'active';
            const isLocked = stage.status === 'locked';

            return (
              <div 
                key={stage.id} 
                className={`relative flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
              >
                {/* 连接线 (横向) */}
                <div className={`absolute top-1/2 w-1/2 h-2 bg-gray-900 opacity-20 -translate-y-1/2 ${isLeft ? 'right-0' : 'left-0'}`}></div>

                {/* 关卡节点卡片 */}
                <button
                  onClick={() => (isActive || isCompleted) && setSelectedStage(stage)}
                  disabled={isLocked}
                  className={`
                    relative z-10 w-4/5 p-4 rounded-2xl border-4 border-gray-900 transition-transform duration-200
                    ${stage.color}
                    ${isActive ? 'shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 animate-pulse-shadow' : ''}
                    ${isCompleted ? 'shadow-[4px_4px_0_0_rgba(0,0,0,1)] opacity-90' : ''}
                    ${isLocked ? 'opacity-50 grayscale cursor-not-allowed' : ''}
                    ${stage.isBoss ? 'p-6' : ''}
                  `}
                >
                  {/* 状态徽章 */}
                  <div className="absolute -top-4 -right-2 bg-white border-2 border-gray-900 rounded-full p-1.5 shadow-[2px_2px_0_0_rgba(0,0,0,1)] z-20">
                    {stage.icon}
                  </div>

                  <h3 className={`font-black text-gray-900 ${stage.isBoss ? 'text-2xl' : 'text-lg'}`}>
                    {stage.id}. {stage.title}
                  </h3>
                  
                  {!isLocked && (
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-white/50 px-2 py-1 rounded-md border border-gray-900 font-bold text-sm">
                        <Coins size={14} className="text-yellow-600" />
                        +{stage.reward}
                      </div>
                      <ChevronRight size={20} className="text-gray-900" />
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- 底部导航栏 (Bottom Tab Bar) --- */}
      <nav className="fixed bottom-0 w-full bg-white border-t-4 border-gray-900 flex justify-around p-3 pb-safe z-40">
        <button className="flex flex-col items-center gap-1 text-purple-600">
          <Map size={24} strokeWidth={3} />
          <span className="text-[10px] font-bold">Quest Map</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors">
          <Star size={24} strokeWidth={2} />
          <span className="text-[10px] font-bold">Jobs (Unlock)</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-900 transition-colors">
          <User size={24} strokeWidth={2} />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </nav>

      {/* --- 任务详情弹窗 (Task Modal) --- */}
      {selectedStage && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-gray-900 rounded-3xl p-6 w-full max-w-sm shadow-[12px_12px_0_0_rgba(0,0,0,1)] animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl border-2 border-gray-900 ${selectedStage.color} shadow-[2px_2px_0_0_rgba(0,0,0,1)]`}>
                {selectedStage.icon}
              </div>
              <div className="bg-yellow-300 border-2 border-gray-900 px-3 py-1 rounded-full flex items-center gap-1 font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <Coins size={16} className="text-yellow-700"/>
                Reward: {selectedStage.reward}
              </div>
            </div>
            
            <h3 className="text-2xl font-black text-gray-900 mb-2">{selectedStage.title}</h3>
            <p className="text-gray-600 font-medium mb-6 leading-relaxed">
              {selectedStage.description}
            </p>

            <div className="flex gap-3">
              <button 
                onClick={() => setSelectedStage(null)}
                className="flex-1 bg-gray-200 border-2 border-gray-900 text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-300 transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
              >
                Close
              </button>
              {selectedStage.status === 'active' && (
                <button 
                  onClick={() => handleCompleteTask(selectedStage.id, selectedStage.reward)}
                  className="flex-1 bg-purple-500 border-2 border-gray-900 text-white font-black py-3 rounded-xl hover:bg-purple-600 transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                >
                  Claim & Complete
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tailwind 自定义动画 (由于在单文件中，我们用 style 标签注入关键帧) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-shadow {
          0%, 100% { box-shadow: 8px 8px 0 0 rgba(0,0,0,1); }
          50% { box-shadow: 4px 4px 0 0 rgba(0,0,0,1); transform: translate(4px, 4px); }
        }
        .animate-pulse-shadow {
          animation: pulse-shadow 2s infinite ease-in-out;
        }
      `}} />
    </div>
  );
}
