import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import type { Variants } from "framer-motion";

const solutions = [
	{
		id: 1,
		title: "Gestión de Inventario",
		problem: "Actualizar manualmente cada compra, venta y stock",
		problemImpact: "❌ 4 horas/día | ❌ Errores constantes | ❌ Pérdida de ventas",
		solution: "Sistema automatizado que sincroniza ventas, compras y alertas en tiempo real",
		solutionImpact: "✅ 30 minutos/día | ✅ 99% precisión | ✅ 0 pedidos perdidos",
		color: "from-blue-500 to-blue-600",
		icon: "📦",
	},
	{
		id: 2,
		title: "Facturación y Cobros",
		problem: "Enviar facturas, hacer seguimiento y registrar pagos manualmente",
		problemImpact: "❌ 2 horas/día | ❌ Retrasos en cobros | ❌ Documentos desorganizados",
		solution: "Plataforma que genera facturas, envía recordatorios y registra pagos automáticamente",
		solutionImpact: "✅ 5 minutos/día | ✅ Cobros 5 días antes | ✅ 100% organizado",
		color: "from-purple-500 to-purple-600",
		icon: "💳",
	},
	{
		id: 3,
		title: "Atención al Cliente",
		problem: "Responder chats, correos y llamadas constantemente",
		problemImpact: "❌ 6 horas/día | ❌ Clientes esperando | ❌ Respuestas inconsistentes",
		solution: "Chatbot IA que responde 24/7 consultas frecuentes y escalas casos complejos",
		solutionImpact: "✅ 1 hora/día | ✅ Respuesta inmediata | ✅ Satisfacción 95%",
		color: "from-pink-500 to-pink-600",
		icon: "💬",
	},
];

const ProblemSolution = () => {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8 },
		},
	};

	return (
		<section
			id="solutions"
			className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden w-full px-4 sm:px-6 lg:px-8"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					animate={{ opacity: [0.2, 0.4, 0.2] }}
					transition={{ duration: 8, repeat: Infinity }}
					className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl will-change-transform"
				/>
			</div>

			<div className="relative max-w-6xl mx-auto z-10">
				{/* Título */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12 sm:mb-16 lg:mb-20"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
						El cambio que necesitas,{" "}
						<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							con números
						</span>
					</h2>
					<p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
						Empresas reales en Trujillo transformaron sus operaciones
					</p>
				</motion.div>

				{/* Solutions */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="space-y-8 sm:space-y-10 lg:space-y-12"
				>
					{solutions.map((item, index) => (
						<motion.div key={item.id} variants={itemVariants}>
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
								{/* Problema */}
								<motion.div
									whileHover={{
										boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)",
									}}
									className="lg:col-span-1 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30 backdrop-blur hover:border-red-500/50 transition-all"
								>
									<div className="flex items-start gap-3 mb-3 sm:mb-4">
										<X className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 flex-shrink-0 mt-1" />
										<div className="flex-1">
											<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-300">
												Antes
											</h3>
											<p className="text-sm sm:text-base lg:text-lg text-white mt-1 sm:mt-2 font-semibold">
												{item.problem}
											</p>
										</div>
									</div>
									<div className="text-xs sm:text-sm text-red-200 space-y-1 pl-9">
										{item.problemImpact.split(" | ").map((impact, i) => (
											<p key={i}>{impact}</p>
										))}
									</div>
								</motion.div>

								{/* Flecha */}
								<div className="hidden lg:flex justify-center">
									<motion.div
										animate={{ x: [0, 15, 0], scale: [1, 1.2, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
										className="text-3xl sm:text-4xl lg:text-5xl text-blue-400 font-bold"
									>
										→
									</motion.div>
								</div>

								{/* Solución */}
								<motion.div
									whileHover={{
										boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)",
									}}
									className="lg:col-span-1 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 backdrop-blur hover:border-green-500/50 transition-all"
								>
									<div className="flex items-start gap-3 mb-3 sm:mb-4">
										<CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 flex-shrink-0 mt-1" />
										<div className="flex-1">
											<h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-300">
												Después
											</h3>
											<p className="text-sm sm:text-base lg:text-lg text-white mt-1 sm:mt-2 font-semibold">
												{item.solution}
											</p>
										</div>
									</div>
									<div className="text-xs sm:text-sm text-green-200 space-y-1 pl-9">
										{item.solutionImpact.split(" | ").map((impact, i) => (
											<p key={i}>{impact}</p>
										))}
									</div>
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ProblemSolution;
