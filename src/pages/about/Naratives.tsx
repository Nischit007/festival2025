import image1 from '../../assets/images/About2.jpeg';
import image2 from '../../assets/images/About4.jpeg';
import image3 from '../../assets/images/About7.jpeg';

const narativesData = [
    {
        title: "WHAT WE BELIEVE IN",
        image: image1,
        color: "#977F6D",
        points: [
            "A future where communities drive their own change.",
            "Development that shifts power, decentralises philanthropy, and recognises local resources.",
            "Storytelling that provokes reflection, challenges power, and inspires action.",
        ]
    },
    {
        title: "OUR TRUTHS",
        image: image2,
        color: "#977F6D",
        points: [
            "Community philanthropy is real, flourishing and happening now.",
            "It is more than charity; it is solidarity, rights-claiming, and mutual aid.",
            "Everyone has a role to play: givers, doers, artists, activists, leaders, and neighbours.",
            "The time for these stories is NOW."
        ]
    },
    {
        title: "OUR CALL",
        image: image3,
        color: "#977F6D",
        points: [
            "Let’s celebrate and share these stories to inspire, provoke, and build a movement for lasting change.",
        ]
    },
];

const NarrativeCards = () => {


    return (
        <div className="min-h-auto bg-[#FAFDEE] py-10 relative z-10">
            <div className="max-w-8xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-xl md:text-3xl font-[playfair] text-gray-900 mb-4">
                    Our Shared Narratives
                    </h1>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {narativesData.map((narrative, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer"
                        >
                            {/* Card Container */}
                            <div className='bg-[#FAFDEE] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col'>
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={narrative.image} 
                                        alt={narrative.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Color Accent Bar */}
                                    <div 
                                        className="absolute bottom-0 left-0 w-full h-1"
                                        style={{ backgroundColor: narrative.color }}
                                    />
                                </div>
                                
                                {/* Content Section */}
                                <div className="p-6 flex-grow flex flex-col">
                                    {/* Title with Color Accent */}
                                    <div className="flex items-start mb-4">
                                        <div 
                                            className="w-1 h-12 rounded-full mr-4 flex-shrink-0"
                                            style={{ backgroundColor: narrative.color }}
                                        />
                                        <h3 className="text-xl font-[playfair] leading-tight">
                                            {narrative.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Points List */}
                                    <div className="mb-4 flex-grow">
                                        <ul className="space-y-3">
                                            {narrative.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="flex items-start">
                                                    <div 
                                                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                                                        style={{ backgroundColor: narrative.color }}
                                                    />
                                                    <span className="font-[muli] leading-relaxed">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {/* Indicator */}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex items-center">
                                            <div 
                                                className='w-3 h-3 rounded-full mr-2 transition-all duration-300'
                                                style={{ backgroundColor: narrative.color }}
                                            />
                                            <span className="text-sm font-medium text-gray-500">0{index + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Navigation Dots */}
                <div className="flex justify-center mt-12 lg:hidden">
                    {narativesData.map((narrative, index) => (
                        <button
                            key={index}
                            className='w-3 h-3 rounded-full mx-2 transition-all duration-300'
                            style={{ backgroundColor: narrative.color }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NarrativeCards;