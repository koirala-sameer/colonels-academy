// src/components/MentorCard.tsx
import { motion } from 'framer-motion';
import { Award, Star, Target, Users } from 'lucide-react';

interface MentorCardProps {
  mentor: {
    name: string;
    rank: string;
    experience: string;
    specialization: string;
    image: string;
    achievements: string[];
  };
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-xl bg-white border border-gray-200 p-5"
    >
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-army-500 to-army-700 overflow-hidden">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-army-gold text-white p-1 rounded-full">
            <Award className="w-4 h-4" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-display font-bold text-gray-900">
                {mentor.name}
              </h4>
              <p className="text-sm text-gray-600">{mentor.rank}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-army-gold fill-current" />
              <span className="text-sm font-bold">4.9</span>
            </div>
          </div>
          
          <div className="mt-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <Target className="w-4 h-4" />
              <span>{mentor.specialization}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>{mentor.experience}</span>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-2">
              Achievements
            </div>
            <div className="flex flex-wrap gap-2">
              {mentor.achievements.slice(0, 2).map((achievement, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-gradient-to-r from-gray-50 to-gray-100 rounded-md text-gray-700"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MentorCard;