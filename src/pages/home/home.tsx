import { useState, useEffect } from 'react';
// import { getMessages } from '../path/to/firebaseConfig'; // Ajuste o caminho conforme a estrutura do seu projeto
// import Header from '../components/Header'; // Importe o componente Header
// import images from '../constants/images'; // Importe suas imagens
import { getMessages } from '../../database/firebaseConfig';
import Header from '../../components/header/header';
import images from '../../assets';

const Home = () => {
	const [currentNotice, setCurrentNotice] = useState(0);
	// Mensagem padrão como estado inicial
	const [notices, setNotices] = useState([
		`Nesta Páscoa, a CAPC celebra junto com você o renascer da esperança e o florescer da vida. 
    Que este período de renovação traga força, fé e novos caminhos para todos que fazem parte 
    da nossa comunidade. Continuamos juntos nesta jornada, compartilhando amor e cuidado.`,
	]);
	const [loading, setLoading] = useState(true);

	// Efeito para carregar as mensagens do Firestore ao montar o componente
	useEffect(() => {
		const fetchMessages = async () => {
			try {
				setLoading(true);
				const messages = await getMessages(); // Usar a nova função getMessages

				if (messages.length > 0) {
					setNotices(messages); // Substituir completamente o array de notices
				}
			} catch (error) {
				console.error('Erro ao buscar mensagens:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchMessages();
	}, []); // Executa apenas na montagem do componente

	// Rotação automática dos avisos
	useEffect(() => {
		// Só inicia a rotação se tiver mais de uma mensagem
		if (notices.length > 1) {
			const interval = setInterval(() => {
				setCurrentNotice((prev) => (prev + 1) % notices.length);
			}, 5000);
			return () => clearInterval(interval);
		}
	}, [notices]); // Depende do array de notices

	return (
		<div
			style={{
				backgroundColor: '#f8f8f8',
				minHeight: '100vh',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
				position: 'relative',
			}}
		>
			{/* Header/Navbar */}
			<Header />

			{/* Hero Section with Background Image */}
			<div
				style={{
					marginTop: '80px',
					backgroundImage: "url('https://i.imgur.com/SwWot0b.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					width: '100%',
					height: '90vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				{/* Logo centralizado */}
				<img
					src={images.LOGO_LARANJA}
					alt="Logo CAPC"
					style={{
						width: '200px',
						bottom: '15px',
						position: 'absolute',
						height: 'auto',
						filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.09))',
						zIndex: 2,
					}}
				/>
			</div>

			{/* Avisos Section */}
			<div
				style={{
					width: '100%',
					backgroundColor: '#323232',
					padding: '80px 20px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						width: '100%',
						maxWidth: '800px',
						backgroundColor: '#fff',
						borderRadius: '16px',
						padding: '40px',
						boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
						position: 'relative',
						minHeight: '220px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '6px',
							backgroundColor: '#F77C2C',
							borderTopLeftRadius: '16px',
							borderTopRightRadius: '16px',
						}}
					></div>

					<div
						style={{
							textAlign: 'center',
							padding: '20px',
							width: '100%',
						}}
					>
						<h2
							style={{
								color: '#F77C2C',
								fontSize: '2rem',
								marginBottom: '30px',
								fontWeight: 700,
							}}
						>
							Avisos e Notícias
						</h2>

						{loading ? (
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<div
									style={{
										width: '40px',
										height: '40px',
										border: '4px solid #f3f3f3',
										borderTop: '4px solid #F77C2C',
										borderRadius: '50%',
										animation: 'spin 1s linear infinite',
									}}
								></div>
							</div>
						) : (
							<p
								style={{
									fontSize: '1.3rem',
									color: '#444',
									lineHeight: 1.7,
									maxWidth: '600px',
									margin: '0 auto',
								}}
							>
								{notices[currentNotice]}
							</p>
						)}

						{notices.length > 1 && (
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									marginTop: '40px',
									gap: '12px',
								}}
							>
								{notices.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentNotice(index)}
										style={{
											width: '14px',
											height: '14px',
											borderRadius: '50%',
											border: 'none',
											background: currentNotice === index ? '#F77C2C' : '#ddd',
											cursor: 'pointer',
											transition: 'all 0.3s ease',
											transform: currentNotice === index ? 'scale(1.2)' : 'scale(1)',
										}}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
