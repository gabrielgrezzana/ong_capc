import { useState, useEffect } from 'react';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	// Detecta o scroll para mudança de estilo
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Detecta qual seção está visível
	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				'home',
				'atividades',
				'depoimentos',
				'historia',
				'missao',
				'momentos',
				'quem-somos',
				'fornecedores',
				'cancer',
			];

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 100 && rect.bottom >= 100) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const styles = {
		header: {
			width: '100%',
			height: '80px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '0 20px',
			position: 'fixed' as const,
			top: 0,
			left: 0,
			zIndex: 1000,
			backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)',
			boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
			backdropFilter: 'blur(10px)',
			borderBottom: isScrolled ? '1px solid rgba(247, 124, 44, 0.2)' : '1px solid rgba(0, 0, 0, 0.05)',
			transition: 'all 0.3s ease-in-out',
		},
		nav: {
			display: 'flex',
			gap: '8px',
			justifyContent: 'center',
			alignItems: 'center',
			maxWidth: '1200px',
			width: '100%',
			flexWrap: 'wrap' as const,
		},
		button: (isActive: boolean) => ({
			padding: '10px 18px',
			border: 'none',
			borderRadius: '25px',
			backgroundColor: isActive ? '#F77C2C' : 'transparent',
			color: isActive ? 'white' : '#555',
			fontSize: '14px',
			fontWeight: 600 as const,
			cursor: 'pointer' as const,
			transition: 'all 0.3s ease-in-out',
			position: 'relative' as const,
			overflow: 'hidden' as const,
			textTransform: 'capitalize' as const,
			letterSpacing: '0.5px',
			whiteSpace: 'nowrap' as const,
			boxShadow: isActive ? '0 4px 15px rgba(247, 124, 44, 0.3)' : 'none',
			transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
			':hover': {
				backgroundColor: isActive ? '#E56A1F' : 'rgba(247, 124, 44, 0.1)',
				color: isActive ? 'white' : '#F77C2C',
				transform: 'translateY(-2px)',
				boxShadow: '0 6px 20px rgba(247, 124, 44, 0.2)',
			},
		}),
		buttonHover: {
			backgroundColor: 'rgba(247, 124, 44, 0.1)',
			color: '#F77C2C',
			transform: 'translateY(-2px)',
			boxShadow: '0 6px 20px rgba(247, 124, 44, 0.2)',
		},
		buttonActive: {
			backgroundColor: '#E56A1F',
		},
	};

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			const headerHeight = 80;
			const elementPosition = section.offsetTop - headerHeight;
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth',
			});
		}
	};

	const menuItems = [
		{ id: 'home', label: 'Início' },
		{ id: 'atividades', label: 'Atividades' },
		{ id: 'depoimentos', label: 'Depoimentos' },
		{ id: 'historia', label: 'História' },
		{ id: 'missao', label: 'Missão' },
		{ id: 'momentos', label: 'Momentos' },
		{ id: 'quem-somos', label: 'Quem Somos' },
		{ id: 'fornecedores', label: 'O que Fornecemos' },
		{ id: 'cancer', label: 'Câncer' },
	];

	return (
		<header style={styles.header}>
			<nav style={styles.nav}>
				{menuItems.map((item) => (
					<button
						key={item.id}
						style={styles.button(activeSection === item.id)}
						onClick={() => scrollToSection(item.id)}
						onMouseEnter={(e) => {
							if (activeSection !== item.id) {
								Object.assign(e.currentTarget.style, styles.buttonHover);
							}
						}}
						onMouseLeave={(e) => {
							if (activeSection !== item.id) {
								Object.assign(e.currentTarget.style, styles.button(false));
							} else {
								Object.assign(e.currentTarget.style, styles.button(true));
							}
						}}
						onMouseDown={(e) => {
							if (activeSection === item.id) {
								Object.assign(e.currentTarget.style, styles.buttonActive);
							}
						}}
					>
						{item.label}
					</button>
				))}
			</nav>
		</header>
	);
};

export default Header;
