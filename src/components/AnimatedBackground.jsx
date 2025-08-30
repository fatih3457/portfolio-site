import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Java", "Spring Boot", "React", "REST API",
  "Javascript", "Flutter", "Dart", "OOP", "AWS",
  "Microservices", "CI/CD", "MySQL", "PostgreSQL",
  "Git", "Github", "Kubernetes", "NoSQL",
];

export default function AnimatedBackground() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const randomLeft = Math.random() * 100; // % olarak sola kayma
      const randomDuration = 4 + Math.random() * 4; // 4-8 sn arası süzülme

      setItems(prev => [
        ...prev,
        {
          id: Date.now(),
          word: randomWord,
          left: randomLeft,
          duration: randomDuration
        }
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {items.map(item => (
        <motion.div
          key={item.id}
          initial={{ y: -50, rotate: 0, opacity: 0 }}
          animate={{
            y: "100vh",
            rotate: 360,
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: item.duration,
            ease: "easeInOut"
          }}
          className="absolute text-lg font-bold"
          style={{
            left: `${item.left}%`,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
          }}
        >
          {item.word}
        </motion.div>
      ))}
    </div>
  );
}