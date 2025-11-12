// Portfolio Content Data
const portfolioContent = {
    about: {
        user: "Tell me about yourself",
        assistant: `
            <h2>About Me</h2>
            <p>Hello! I'm <strong>Vishal Pandey</strong>, a Technical Lead with 5+ years of experience in building enterprise-grade software solutions. I specialize in real-time data-driven architectures, full-stack development, and leading cross-functional teams to deliver innovative products.</p>
            
            <p>Currently leading technical initiatives at <strong>Lumiq</strong>, where I've architected and developed multiple products from scratch. I have a proven track record of building scalable platforms, managing diverse engineering teams, and delivering products that solve real-world business problems.</p>
            
            <h3>What I Do</h3>
            <ul>
                <li>🚀 Lead technical architecture and product development</li>
                <li>👥 Build and manage high-performing engineering teams</li>
                <li>⚡ Design real-time data-driven systems and enterprise solutions</li>
                <li>🔧 Implement cloud infrastructure and deployment strategies</li>
                <li>📊 Drive technical decisions and stakeholder management</li>
            </ul>
            
            <h3>My Journey</h3>
            <p>From founding my own IoT startup <strong>AirTrik</strong> to leading products at <strong>LimeChat</strong> (AI-powered e-commerce support) and <strong>Lumiq</strong> (data reliability platform), I've worn many hats - from hands-on developer to technical leader, team builder to product strategist.</p>
            
            <h3>Philosophy</h3>
            <p>I believe in building products that make a real impact, fostering collaborative team environments, and continuous learning. Whether it's architecting complex systems or mentoring team members, I'm passionate about creating solutions that scale and teams that thrive.</p>
            
            <h3>Beyond Code</h3>
            <p>When I'm not coding, you'll find me exploring photography/videography, creating content on YouTube, or building fun side projects like retro games and web experiments.</p>
        `
    },
    skills: {
        user: "What are your skills?",
        assistant: `
            <h2>Skills & Expertise</h2>
            <p>I have extensive experience across the full technology stack, from frontend interfaces to backend systems, cloud infrastructure, and team leadership.</p>
            
            <h3>Frontend Development</h3>
            <div class="skill-tags">
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">JavaScript (ES6+)</span>
                <span class="skill-tag">Angular</span>
                <span class="skill-tag">Responsive Design</span>
            </div>
            
            <h3>Backend Development</h3>
            <div class="skill-tags">
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">PostgreSQL</span>
                <span class="skill-tag">RESTful APIs</span>
                <span class="skill-tag">Microservices</span>
            </div>
            
            <h3>Cloud & DevOps</h3>
            <div class="skill-tags">
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">Kubernetes</span>
                <span class="skill-tag">ArgoCD</span>
            </div>
            
            <h3>Message Queues & Streaming</h3>
            <div class="skill-tags">
                <span class="skill-tag">Kafka</span>
                <span class="skill-tag">RabbitMQ</span>
            </div>
            
            <h3>Authentication & Security</h3>
            <div class="skill-tags">
                <span class="skill-tag">Keycloak</span>
            </div>
            
            <h3>Tools & Platforms</h3>
            <div class="skill-tags">
                <span class="skill-tag">VS Code</span>
                <span class="skill-tag">Git & GitHub</span>
                <span class="skill-tag">Teams</span>
                <span class="skill-tag">Notion</span>
                <span class="skill-tag">Metabase</span>
            </div>
            
            <h3>Other Technologies</h3>
            <div class="skill-tags">
                <span class="skill-tag">IoT Development</span>
                <span class="skill-tag">C Programming</span>
                <span class="skill-tag">NPM Package Development</span>
                <span class="skill-tag">Python Packages (pip)</span>
            </div>
            
            <h3>Leadership & Management</h3>
            <div class="skill-tags">
                <span class="skill-tag">Technical Leadership</span>
                <span class="skill-tag">Team Building</span>
                <span class="skill-tag">Agile/Scrum (20+ Sprints)</span>
                <span class="skill-tag">Stakeholder Management</span>
                <span class="skill-tag">Hiring & Interviewing</span>
                <span class="skill-tag">Product Development</span>
            </div>
        `
    },
    experience: {
        user: "Tell me about your experience",
        assistant: `
            <h2>Work Experience</h2>
            <p>5+ years of professional experience spanning technical leadership, full-stack development, and entrepreneurship.</p>
            
            <div class="project-card">
                <h3 class="project-title">🏢 Full Stack and IoT Developer (Founder)</h3>
                <p style="color: var(--accent-purple); margin-bottom: 8px;"><strong>AirTrik</strong> • New Delhi • August 2019 - July 2020</p>
                <p class="project-description">
                    <strong>Founded and built a PaaS application</strong> to support the development of secure and scalable Industrial IoT applications.<br><br>
                    
                    <strong>Key Achievements:</strong><br>
                    • Published <a href="https://play.google.com/store/apps/details?id=com.airtrik.airtrikconnect" target="_blank" style="color: var(--accent-blue);">Android App</a> for IoT device management<br>
                    • Developed and published <a href="https://www.npmjs.com/package/airtrik" target="_blank" style="color: var(--accent-blue);">NPM Package</a> for JavaScript developers<br>
                    • Created Python package (pip) and other SDKs available on GitHub<br>
                    • Built complete tech stack: Python, Django, C, Apache, Mosquitto, Docker, AWS<br>
                    • Designed and implemented secure IoT communication protocols
                </p>
            </div>
            
            <div class="project-card">
                <h3 class="project-title">🚀 Technical Product Lead</h3>
                <p style="color: var(--accent-purple); margin-bottom: 8px;"><strong><a href="https://www.limechat.ai" target="_blank" style="color: var(--accent-purple); text-decoration: none;">LimeChat</a></strong> • Bengaluru • August 2020 - January 2022</p>
                <p class="project-description">
                    <strong>Led the <a href="https://www.limechat.ai" target="_blank" style="color: var(--accent-blue);">LimeChat</a> AI help desk product</strong> that facilitates e-commerce customer support globally.<br><br>
                    
                    <strong>Key Achievements:</strong><br>
                    • Created the technology for the LimeChat AI help desk from scratch<br>
                    • Managed a cross-functional team of 10 members (backend devs, frontend devs, testers, designers)<br>
                    • Successfully managed over 20 agile sprints<br>
                    • Successfully launched <a href="https://apps.shopify.com/limechat-shop" target="_blank" style="color: var(--accent-blue);">Shopify App</a>, <a href="https://play.google.com/store/apps/details?id=com.limechat.app" target="_blank" style="color: var(--accent-blue);">Android App</a>, and <a href="https://apps.apple.com/in/app/limechat-agent/id1579651271" target="_blank" style="color: var(--accent-blue);">iOS App</a><br>
                    • Enabled AI-powered customer support for e-commerce businesses worldwide
                </p>
            </div>
            
            <div class="project-card">
                <h3 class="project-title">💼 Technical Lead</h3>
                <p style="color: var(--accent-purple); margin-bottom: 8px;"><strong><a href="https://www.lumiq.ai" target="_blank" style="color: var(--accent-purple); text-decoration: none;">Lumiq</a></strong> • Noida • February 2022 - Present</p>
                <p class="project-description">
                    <strong>Leading the <a href="https://www.lumiq.ai" target="_blank" style="color: var(--accent-blue);">Lumiq</a> emPower pryzm products</strong> - a data reliability platform for modern financial services enterprises.<br><br>
                    
                    <strong>Key Achievements:</strong><br>
                    • Created the technology stack for 2 sub-products of emPower (suite of products)<br>
                    • <a href="https://www.prnewswire.com/in/news-releases/lumiq-unveils-empower-pryzm-a-data-reliability-platform-purpose-built-for-the-modern-financial-services-enterprise-301923193.html" target="_blank" style="color: var(--accent-blue);">Launched emPower pryzm</a> - featured in PR Newswire<br>
                    • Led multiple evolving teams of Data Engineers, Full Stack Engineers, Designers, and Testers<br>
                    • Built products on real-time data-driven architecture<br>
                    • Gained expertise in networking and deployment of enterprise-grade software<br>
                    • Successfully managed team motivation and productivity through effective stakeholder management
                </p>
            </div>
        `
    },
    projects: {
        user: "Show me your projects",
        assistant: `
            <h2>Featured Projects</h2>
            <p>A collection of personal projects, open-source contributions, and product launches that showcase my versatility as a developer.</p>
            
            <div class="project-card">
                <h3 class="project-title">🎯 Lumiq emPower pryzm</h3>
                <p class="project-description">
                    A data reliability platform purpose-built for modern financial services enterprises. Led the technical development from conception to launch, creating multiple sub-products within the emPower suite.
                </p>
                <div class="skill-tags">
                    <span class="skill-tag">Real-time Architecture</span>
                    <span class="skill-tag">Data Engineering</span>
                    <span class="skill-tag">Enterprise Software</span>
                    <span class="skill-tag">Team Leadership</span>
                </div>
                <div class="project-links">
                    <a href="https://www.lumiq.ai" target="_blank" class="project-link">🔗 Visit Lumiq</a>
                    <a href="https://pryzm.ai/" target="_blank" class="project-link">🚀 Pryzm Platform</a>
                    <a href="https://www.prnewswire.com/in/news-releases/lumiq-unveils-empower-pryzm-a-data-reliability-platform-purpose-built-for-the-modern-financial-services-enterprise-301923193.html" target="_blank" class="project-link">📰 Press Release</a>
                </div>
            </div>
            
            <div class="project-card">
                <h3 class="project-title">🤖 LimeChat AI Help Desk</h3>
                <p class="project-description">
                    AI-powered customer support platform for e-commerce businesses. Built from scratch and launched across multiple platforms including Shopify, Android, and iOS. Manages customer support for global e-commerce brands.
                </p>
                <div class="skill-tags">
                    <span class="skill-tag">AI/ML</span>
                    <span class="skill-tag">Full Stack</span>
                    <span class="skill-tag">Cross-Platform</span>
                    <span class="skill-tag">Product Management</span>
                </div>
                <div class="project-links">
                    <a href="https://www.limechat.ai" target="_blank" class="project-link">🔗 Visit LimeChat</a>
                    <a href="https://apps.shopify.com/limechat-shop?surface_detail=limechat&surface_inter_position=1&surface_intra_position=2&surface_type=search" target="_blank" class="project-link">🛍️ Shopify App</a>
                    <a href="https://play.google.com/store/apps/details?id=com.limechat.app" target="_blank" class="project-link">📱 Android App</a>
                    <a href="https://apps.apple.com/in/app/limechat-agent/id1579651271" target="_blank" class="project-link">🍎 iOS App</a>
                </div>
            </div>
            
            <div class="project-card">
                <h3 class="project-title">🔌 AirTrik IoT Platform</h3>
                <p class="project-description">
                    A complete PaaS solution for Industrial IoT applications. Includes Android app, NPM packages, Python libraries, and various SDKs for developers to build secure and scalable IoT solutions.
                </p>
                <div class="skill-tags">
                    <span class="skill-tag">IoT</span>
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">Django</span>
                    <span class="skill-tag">Docker</span>
                    <span class="skill-tag">AWS</span>
                </div>
                <div class="project-links">
                    <a href="https://github.com/airtrik" target="_blank" class="project-link">💻 GitHub</a>
                    <a href="https://www.npmjs.com/package/airtrik" target="_blank" class="project-link">📦 NPM Package</a>
                    <a href="https://pypi.org/project/airtrik/" target="_blank" class="project-link">🐍 Python Package</a>
                </div>
            </div>
            
            <div class="project-card">
                <h3 class="project-title">💬 Real-time P2P Serverless Chat</h3>
                <p class="project-description">
                    A peer-to-peer serverless chat application supporting text, audio, and video communication. Built using WebRTC for direct browser-to-browser communication without server intermediaries.
                </p>
                <div class="skill-tags">
                    <span class="skill-tag">WebRTC</span>
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">P2P</span>
                    <span class="skill-tag">Real-time</span>
                </div>
                <div class="project-links">
                    <a href="https://server-less-chat.vishalpandey.co.in" target="_blank" class="project-link">🔗 Try Live Demo</a>
                </div>
            </div>
            
            <div class="project-card">
                <h3 class="project-title">📇 HiCard - NFC Contact Sharing</h3>
                <p class="project-description">
                    An NFC-based digital business card solution for seamless contact sharing. Simply tap your phone to share your professional details instantly.
                </p>
                <div class="skill-tags">
                    <span class="skill-tag">NFC</span>
                    <span class="skill-tag">Mobile</span>
                    <span class="skill-tag">Web</span>
                </div>
                <div class="project-links">
                    <a href="https://hicard.in" target="_blank" class="project-link">🔗 HiCard Website</a>
                    <a href="https://hicard.in/vishal" target="_blank" class="project-link">👤 My Profile</a>
                </div>
            </div>
            
            <h3>Fun Side Projects & Games 🎮</h3>
            <p>I also enjoy creating fun web-based games and experiments:</p>
            
            <div class="project-card">
                <h3 class="project-title">🎮 Retro Games Collection</h3>
                <p class="project-description">
                    A collection of classic games built with vanilla JavaScript for fun and learning.
                </p>
                <div class="skill-tags">
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">HTML5 Canvas</span>
                    <span class="skill-tag">Game Development</span>
                </div>
                <div class="project-links">
                    <a href="https://car-racing.vishalpandey.co.in/" target="_blank" class="project-link">🏎️ Retro Car Race</a>
                    <a href="https://tetris.vishalpandey.co.in/" target="_blank" class="project-link">🧱 Tetris</a>
                    <a href="https://rock-paper-scissor.vishalpandey.co.in/" target="_blank" class="project-link">✊ Rock Paper Scissor</a>
                </div>
            </div>
        `
    },
    education: {
        user: "What's your educational background?",
        assistant: `
            <h2>Education</h2>
            <p>Strong academic foundation in Computer Science with specialization in AI and Robotics.</p>
            
            <div class="project-card">
                <h3 class="project-title">🎓 B.Tech + M.Tech (Integrated)</h3>
                <p style="color: var(--accent-purple); margin-bottom: 8px;"><strong>Gautam Buddha University</strong> • Greater Noida • August 2015 - August 2020</p>
                <p class="project-description">
                    <strong>Computer Science Engineering</strong><br>
                    <strong>CGPA:</strong> 8.0/10.0<br><br>
                    
                    <strong>M.Tech Specialization:</strong> Artificial Intelligence and Robotics<br><br>
                    
                    <strong>Key Focus Areas:</strong><br>
                    • Artificial Intelligence & Machine Learning<br>
                    • Robotics & Automation<br>
                    • Data Structures & Algorithms<br>
                    • Software Engineering<br>
                    • Database Management Systems<br>
                    • Cloud Computing & Distributed Systems
                </p>
            </div>
            
            <div class="project-card">
                <h3 class="project-title">🏫 Higher Secondary Education (12th)</h3>
                <p style="color: var(--accent-purple); margin-bottom: 8px;"><strong>R.P.V.V No.1, Raj Niwas Marg</strong> • April 2013 - May 2014</p>
                <p class="project-description">
                    <strong>Marks:</strong> 85.6%<br>
                    Strong foundation in Mathematics, Physics, and Computer Science
                </p>
            </div>
            
            <h3>Continuous Learning Journey</h3>
            <p>Beyond formal education, I'm committed to staying current with evolving technologies:</p>
            <ul>
                <li>📚 Hands-on experience with enterprise-grade systems and architectures</li>
                <li>🎯 Real-time data processing and streaming technologies</li>
                <li>👥 Team leadership and agile methodologies (20+ sprint cycles)</li>
                <li>☁️ Cloud infrastructure and DevOps practices</li>
                <li>🔬 Exploring new frameworks, tools, and best practices</li>
                <li>🎥 Creating technical content and sharing knowledge</li>
            </ul>
            
            <h3>Professional Development</h3>
            <div class="skill-tags">
                <span class="skill-tag">Technical Leadership</span>
                <span class="skill-tag">Product Management</span>
                <span class="skill-tag">Enterprise Architecture</span>
                <span class="skill-tag">Team Building & Hiring</span>
                <span class="skill-tag">Stakeholder Management</span>
            </div>
        `
    },
    contact: {
        user: "How can I contact you?",
        assistant: `
            <h2>Let's Connect</h2>
            <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation. Feel free to reach out through any of these channels!</p>
            
            <div class="contact-links">
                <a href="mailto:contact@vishalpandey.co.in" class="contact-item">
                    <span class="contact-icon">📧</span>
                    <div class="contact-info">
                        <div class="contact-label">Email</div>
                        <div class="contact-value">contact@vishalpandey.co.in</div>
                    </div>
                </a>
                
                <a href="tel:+919717130893" class="contact-item">
                    <span class="contact-icon">📱</span>
                    <div class="contact-info">
                        <div class="contact-label">Phone</div>
                        <div class="contact-value">+91 97171 30893</div>
                    </div>
                </a>
                
                <a href="https://www.vishalpandey.co.in" target="_blank" class="contact-item">
                    <span class="contact-icon">🌐</span>
                    <div class="contact-info">
                        <div class="contact-label">Website</div>
                        <div class="contact-value">www.vishalpandey.co.in</div>
                    </div>
                </a>
                
                <a href="https://www.linkedin.com/in/thevishalpandey" target="_blank" class="contact-item">
                    <span class="contact-icon">💼</span>
                    <div class="contact-info">
                        <div class="contact-label">LinkedIn</div>
                        <div class="contact-value">linkedin.com/in/thevishalpandey</div>
                    </div>
                </a>
                
                <a href="https://github.com/vishal-pandey" target="_blank" class="contact-item">
                    <span class="contact-icon">💻</span>
                    <div class="contact-info">
                        <div class="contact-label">GitHub</div>
                        <div class="contact-value">github.com/vishal-pandey</div>
                    </div>
                </a>
            </div>
            
            <h3>Available For</h3>
            <div class="skill-tags">
                <span class="skill-tag">Technical Leadership Roles</span>
                <span class="skill-tag">Consulting & Advisory</span>
                <span class="skill-tag">Product Development</span>
                <span class="skill-tag">Speaking Engagements</span>
                <span class="skill-tag">Collaborations</span>
                <span class="skill-tag">Mentorship</span>
            </div>
            
            <h3>Interests & Hobbies</h3>
            <p>Beyond code, I'm passionate about:</p>
            <ul>
                <li>📸 Photography & Videography - Capturing moments and creating visual stories</li>
                <li>🎥 <a href="https://www.youtube.com/@pandeyvishal" target="_blank" style="color: var(--accent-blue);">YouTube Content Creation</a> - Sharing knowledge and experiences</li>
                <li>🎮 Game Development - Building fun interactive experiences</li>
                <li>🚀 Exploring emerging technologies and innovations</li>
            </ul>
            
            <p style="margin-top: 24px;"><strong>Let's build something amazing together!</strong> 🚀</p>
        `
    }
};

// DOM Elements
const menuItems = document.querySelectorAll('.menu-item');
const actionButtons = document.querySelectorAll('.action-btn');
const welcomeScreen = document.getElementById('welcomeScreen');
const chatContent = document.getElementById('chatContent');
const newChatBtn = document.getElementById('newChatBtn');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const mobileBackdrop = document.getElementById('mobileBackdrop');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// Theme Management
const ThemeManager = {
    // Get system preference
    getSystemPreference: () => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    
    // Get saved theme or use system preference
    getSavedTheme: () => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        return savedTheme || ThemeManager.getSystemPreference();
    },
    
    // Apply theme
    applyTheme: (theme) => {
        const root = document.documentElement;
        
        if (theme === 'dark') {
            root.removeAttribute('data-theme');
            themeIcon.textContent = '🌙';
            themeToggle.setAttribute('title', 'Switch to light mode');
        } else {
            root.setAttribute('data-theme', 'light');
            themeIcon.textContent = '☀️';
            themeToggle.setAttribute('title', 'Switch to dark mode');
        }
        
        // Save preference
        localStorage.setItem('portfolio-theme', theme);
    },
    
    // Toggle theme
    toggle: () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        ThemeManager.applyTheme(newTheme);
    },
    
    // Initialize theme
    init: () => {
        const savedTheme = ThemeManager.getSavedTheme();
        ThemeManager.applyTheme(savedTheme);
        
        // Listen for system preference changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem('portfolio-theme')) {
                    ThemeManager.applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
};

// Initialize theme on page load
ThemeManager.init();

// Function to create message element
function createMessage(sender, content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    
    const avatar = isUser ? '👤' : '🤖';
    const senderName = isUser ? 'You' : 'Portfolio';
    
    messageDiv.innerHTML = `
        <div class="message-header">
            <div class="avatar">${avatar}</div>
            <span class="sender-name">${senderName}</span>
        </div>
        <div class="message-content">${content}</div>
    `;
    
    return messageDiv;
}

// Function to display section content
function displaySection(section) {
    // Hide welcome screen
    welcomeScreen.style.display = 'none';
    
    // Clear existing content
    chatContent.innerHTML = '';
    
    // Get content for the section
    const content = portfolioContent[section];
    
    if (content) {
        // Add user message
        const userMessage = createMessage('You', content.user, true);
        chatContent.appendChild(userMessage);
        
        // Add assistant message with slight delay for effect
        setTimeout(() => {
            const assistantMessage = createMessage('Portfolio', content.assistant, false);
            chatContent.appendChild(assistantMessage);
            
            // Scroll to bottom
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 300);
    }
    
    // Update active menu item
    menuItems.forEach(item => {
        if (item.dataset.section === section) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Close mobile sidebar after selection
    closeMobileSidebar();
}

// Function to show welcome screen
function showWelcomeScreen() {
    welcomeScreen.style.display = 'block';
    chatContent.innerHTML = '';
    
    // Remove active state from all menu items
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Close mobile sidebar
    closeMobileSidebar();
}

// Function to open mobile sidebar
function openMobileSidebar() {
    sidebar.classList.add('active');
    mobileBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close mobile sidebar
function closeMobileSidebar() {
    sidebar.classList.remove('active');
    mobileBackdrop.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners for menu items
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const section = item.dataset.section;
        displaySection(section);
    });
});

// Event listeners for quick action buttons
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const section = button.dataset.section;
        displaySection(section);
    });
});

// Event listener for new chat button
newChatBtn.addEventListener('click', () => {
    showWelcomeScreen();
});

// Event listener for menu toggle (mobile)
menuToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        closeMobileSidebar();
    } else {
        openMobileSidebar();
    }
});

// Event listener for mobile menu button
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Mobile menu clicked'); // Debug log
        if (sidebar.classList.contains('active')) {
            closeMobileSidebar();
        } else {
            openMobileSidebar();
        }
    });
}

// Event listener for theme toggle
themeToggle.addEventListener('click', () => {
    ThemeManager.toggle();
});

// Event listener for mobile backdrop click
mobileBackdrop.addEventListener('click', () => {
    closeMobileSidebar();
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMobileSidebar();
        }
    }
});

// Smooth scroll behavior
document.getElementById('chatMessages').style.scrollBehavior = 'smooth';

// Initialize with about section by default (optional)
// Uncomment the line below if you want to show "About" section on load instead of welcome screen
// displaySection('about');

console.log('Portfolio website loaded successfully! 🚀');
