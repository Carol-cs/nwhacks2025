import React from 'react';

const HeartTalkLogo = ({ width = "160", height = "60" }) => {
    return (
        <div className="flex justify-center items-center p-4">
            <svg 
                width={width} 
                height={height} 
                viewBox="0 0 400 200"
                className="bg-white rounded-lg shadow-lg p-0"
            >
                {/* Gradient definition */}
                <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B6B" />
                        <stop offset="100%" stopColor="#FF8E8E" />
                    </linearGradient>
                </defs>
                
                {/* Group for heart and dots - shifted left */}
                <g transform="translate(-20, 0)">
                    {/* Heart shape */}
                    <path 
                        d="M100 140 L160 80 Q180 60 160 40 Q140 20 120 40 L100 60 L80 40 Q60 20 40 40 Q20 60 40 80 Z" 
                        fill="url(#heartGradient)"
                        className="drop-shadow-lg"
                    />
                    
                    {/* Animated dots */}
                    <circle cx="65" cy="160" r="10" fill="#4A90E2" className="animate-pulse" />
                    <circle cx="100" cy="160" r="10" fill="#4A90E2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <circle cx="135" cy="160" r="10" fill="#4A90E2" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                </g>

                {/* Text group */}
                <g transform="translate(200, 100)" className="animate-fade-in">
                    <text 
                        className="text-8xl font-bold flex"
                        style={{
                            animation: 'slideIn 1s ease-out'
                        }}
                    >
                        <tspan x="0" dy="0" fill="#FF6B6B" className="animate-pulse" style={{ animationDelay: '0.6s' }}>
                            HearT
                        </tspan>
                        <tspan x="218" dy="0" fill="#4A90E2" className="animate-pulse" style={{ animationDelay: '1.3s' }}>
                            Talk
                        </tspan>
                    </text>
                </g>

                <style>
                    {`
                        @keyframes slideIn {
                            from {
                                transform: translateX(20px);
                                opacity: 0;
                            }
                            to {
                                transform: translateX(0);
                                opacity: 1;
                            }
                        }
                    `}
                </style>
            </svg>
        </div>
    );
};

export default HeartTalkLogo;