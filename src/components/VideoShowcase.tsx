import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import { useState } from "react";
import type { Variants } from "framer-motion";

const videos = [
	{
		title: "Solución Empresarial Completa",
		description: "Sistema integral de automatización para tu negocio",
		driveId: "1zEV4oYxHunveeLtWnGwm1xYXWI6PiuBNeUPGqXlFCjo",
		metric: "Transformación total",
		icon: "🏢",
	},
	{
		title: "Gestión de Rutas",
		description: "Optimiza tus rutas de entrega y transporte",
		driveId: "1k-i1VKkCorUBHolmBELQscJ0BLzPuo9eGbBdWTJoV9M",
		metric: "40% más eficiente",
		icon: "🚚",
	},
];

const VideoShowcase = () => {
	const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, scale: 0.9, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section
			id="videos"
			className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden w-full px-4 sm:px-6 lg:px-8"
		>
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					animate={{
						x: [0, 50, 0],
						y: [0, -30, 0],
						opacity: [0.2, 0.4, 0.2],
					}}
					transition={{ duration: 15, repeat: Infinity }}
					className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl will-change-transform"
				/>
			</div>

			<div className="relative max-w-6xl mx-auto z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12 sm:mb-16 lg:mb-20"
				>
					<motion.div
						animate={{ scale: [1, 1.1, 1] }}
						transition={{ duration: 3, repeat: Infinity }}
						className="inline-block mb-3 sm:mb-4"
					>
						<Film className="w-10 h-10 sm:w-12 sm:h-12 text-pink-400" />
					</motion.div>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4">
						Mira cómo{" "}
						<span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
							transformamos negocios
						</span>
					</h2>
					<p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
						Videos de soluciones reales en empresas de Trujillo
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
				>
					{videos.map((video, i) => (
						<motion.div
							key={i}
							variants={cardVariants}
							whileHover={{ y: -10 }}
							className="group cursor-pointer"
							onClick={() => setSelectedVideo(video.driveId)}
						>
							<motion.div
								whileHover={{
									boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)",
								}}
								className="relative w-full aspect-video rounded-lg sm:rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-blue-400/50 transition-all"
							>
								<motion.div
									animate={{
										backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
									}}
									transition={{ duration: 8, repeat: Infinity }}
									className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20"
									style={{ backgroundSize: "200% 200%" }}
								/>

								<motion.div
									initial={{ opacity: 0.4 }}
									whileHover={{ opacity: 0.6 }}
									className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center"
								>
									<motion.div
										whileHover={{ scale: 1.2 }}
										animate={{ scale: [1, 1.1, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
									>
										<Play size={24} className="text-white ml-1 sm:ml-2" />
									</motion.div>
								</motion.div>

								<motion.div
									animate={{ y: [0, -5, 0] }}
									transition={{ duration: 2, repeat: Infinity }}
									className="absolute top-3 right-3 px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/90 to-purple-600/90 rounded-lg text-white text-xs sm:text-sm font-bold backdrop-blur border border-white/20"
								>
									{video.metric}
								</motion.div>
							</motion.div>

							<div className="mt-3 sm:mt-4 lg:mt-6 space-y-2 sm:space-y-3">
								<div className="flex items-center gap-2">
									<span className="text-xl sm:text-2xl lg:text-3xl">
										{video.icon}
									</span>
									<h3 className="font-bold text-white text-sm sm:text-base lg:text-lg">
										{video.title}
									</h3>
								</div>
								<p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
									{video.description}
								</p>

								<motion.button
									whileHover={{ x: 5 }}
									className="text-blue-400 hover:text-blue-300 font-semibold text-xs sm:text-sm flex items-center gap-2 group/btn"
								>
									Ver video
									<span className="group-hover/btn:translate-x-1 transition-transform">
										→
									</span>
								</motion.button>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Modal Video - Optimizado */}
			{selectedVideo && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					onClick={() => setSelectedVideo(null)}
					className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ type: "spring", damping: 20, stiffness: 300 }}
						onClick={(e) => e.stopPropagation()}
						className="w-full max-w-5xl aspect-video relative"
					>
						<iframe
							width="100%"
							height="100%"
							src={`https://drive.google.com/file/d/${selectedVideo}/preview?resourcekey`}
							title="Video Demo"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
							referrerPolicy="no-referrer"
							sandbox="allow-same-origin allow-scripts allow-popups allow-presentation allow-forms"
							className="rounded-lg shadow-2xl"
						/>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => setSelectedVideo(null)}
							className="absolute -top-12 right-0 text-white hover:text-gray-300 font-bold text-lg"
							aria-label="Cerrar video"
						>
							✕
						</motion.button>
					</motion.div>
				</motion.div>
			)}
		</section>
	);
};

export default VideoShowcase;
