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

// Configure marked.js for better rendering
if (typeof marked !== 'undefined') {
    marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: false,
        mangle: false
    });
}

// Function to create message element
function createMessage(sender, content, isUser = false, isMarkdown = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    
    const avatar = isUser ? '👤' : '✨';
    const senderName = isUser ? 'You' : 'Vishal\'s Assistant';
    
    // Parse markdown if enabled and marked is available
    let processedContent = content;
    if (isMarkdown && typeof marked !== 'undefined') {
        processedContent = marked.parse(content);
    }
    
    messageDiv.innerHTML = `
        <div class="message-header">
            <div class="avatar">${avatar}</div>
            <span class="sender-name">${senderName}</span>
        </div>
        <div class="message-content markdown-content">${processedContent}</div>
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
    
    // Remove active state from home button
    newChatBtn.classList.remove('active');
    
    // Close mobile sidebar after selection
    closeMobileSidebar();
}

// Function to show welcome screen
function showWelcomeScreen() {
    welcomeScreen.style.display = 'block';
    chatContent.innerHTML = '';
    
    // Remove active state from all menu items
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Add active state to home button
    newChatBtn.classList.add('active');
    
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

// Set home button as active on initial load (since welcome screen is shown)
newChatBtn.classList.add('active');

// Initialize with about section by default (optional)
// Uncomment the line below if you want to show "About" section on load instead of welcome screen
// displaySection('about');

// ===== AI Chat Integration =====

// AI Mode Manager - Controls which AI backend is active
const AIModeManager = {
    currentMode: 'server', // 'server' or 'local'
    
    isMobile() {
        return window.innerWidth <= 768;
    },
    
    init() {
        const toggle = document.getElementById('aiModeSwitch');
        const serverLabel = document.getElementById('serverModeLabel');
        const localLabel = document.getElementById('localModeLabel');
        const description = document.getElementById('modeDescription');
        
        // On mobile, always use server mode
        if (this.isMobile()) {
            this.currentMode = 'server';
            this.updateUI();
            return;
        }
        
        // Load saved preference (desktop only)
        const savedMode = localStorage.getItem('ai-mode') || 'server';
        this.currentMode = savedMode;
        
        if (toggle) {
            toggle.checked = savedMode === 'local';
            this.updateUI();
            
            toggle.addEventListener('change', () => {
                this.currentMode = toggle.checked ? 'local' : 'server';
                localStorage.setItem('ai-mode', this.currentMode);
                this.updateUI();
                this.onModeChange();
            });
        }
        
        // Make labels clickable
        if (serverLabel) {
            serverLabel.addEventListener('click', () => {
                if (toggle) toggle.checked = false;
                this.currentMode = 'server';
                localStorage.setItem('ai-mode', 'server');
                this.updateUI();
                this.onModeChange();
            });
        }
        
        if (localLabel) {
            localLabel.addEventListener('click', () => {
                if (toggle) toggle.checked = true;
                this.currentMode = 'local';
                localStorage.setItem('ai-mode', 'local');
                this.updateUI();
                this.onModeChange();
            });
        }
    },
    
    updateUI() {
        const serverLabel = document.getElementById('serverModeLabel');
        const localLabel = document.getElementById('localModeLabel');
        const description = document.getElementById('modeDescription');
        
        // On mobile, just update placeholder (status is handled by HTML)
        if (this.isMobile()) {
            chatInput.placeholder = "Ask me anything about Vishal...";
            return;
        }
        
        if (this.currentMode === 'server') {
            serverLabel?.classList.add('active');
            localLabel?.classList.remove('active');
            description?.classList.remove('local-mode');
            if (description) {
                description.innerHTML = '<span class="ai-status-dot online"></span>Running on Vishal\'s M1 Mac homelab ⚡';
            }
            chatInput.placeholder = "Ask me anything about Vishal...";
        } else {
            serverLabel?.classList.remove('active');
            localLabel?.classList.add('active');
            description?.classList.add('local-mode');
            if (description) {
                if (LocalChatManager.isInitialized) {
                    description.innerHTML = '<span class="ai-status-dot online"></span>Running on YOUR device • 100% private 🔒';
                } else if (LocalChatManager.isInitializing) {
                    description.innerHTML = '<span class="ai-status-dot loading"></span>Downloading AI to your device...';
                } else {
                    description.innerHTML = '🔒 Don\'t trust Vishal\'s server? Run AI on your own device!';
                }
            }
            chatInput.placeholder = "Ask me anything (runs on your device)...";
        }
    },
    
    onModeChange() {
        if (this.currentMode === 'local' && !LocalChatManager.isInitialized && !LocalChatManager.isInitializing) {
            // Start initializing WebLLM when switching to local mode (desktop only)
            if (!this.isMobile()) {
                LocalChatManager.initialize();
            }
        }
    },
    
    getActiveManager() {
        // Always use server on mobile
        if (this.isMobile()) {
            return ServerChatManager;
        }
        return this.currentMode === 'server' ? ServerChatManager : LocalChatManager;
    }
};

// ===== Server-based Chat Manager (Default) =====
const ServerChatManager = {
    API_BASE: 'https://vishal-agent.codeshare.co.in',
    APP_NAME: 'vishal_assistant',
    sessionId: null,
    userId: null,
    conversationHistory: [],
    isReady: false,
    currentXHR: null,
    loadingInterval: null,
    isFirstMessage: true,
    
    // Fun homelab cold start messages
    homelabLoadingMessages: [
        "Waking up the M1 Mac... ☕",
        "Poking Vishal's MacBook... 👆",
        "Warming up the neural networks... 🧠",
        "Mac was taking a nap, hold on... 😴",
        "Spinning up Ollama... 🦙",
        "Cold start detected, brewing AI... ☕",
        "The M1 chip is stretching... 🏋️",
        "Homelab is waking up... 🏠",
        "Dusting off the GPU cores... ✨",
        "Loading Vishal's digital brain... 🧠",
        "M1 Mac says 'just 5 more minutes'... ⏰",
        "Initializing homebrew AI... 🍺",
        "The hamsters are running faster... 🐹",
        "Consulting the silicon oracle... 🔮",
    ],
    
    startLoadingAnimation(element) {
        let messageIndex = 0;
        const messages = this.homelabLoadingMessages;
        const self = this;
        
        // Show first message immediately
        element.innerHTML = `<span class="homelab-loading">
            <span class="loading-emoji">🖥️</span>
            <span class="loading-text">${messages[messageIndex]}</span>
        </span>`;
        
        // Rotate messages every 2.5 seconds
        this.loadingInterval = setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            const loadingText = element.querySelector('.loading-text');
            if (loadingText) {
                loadingText.style.opacity = '0';
                setTimeout(() => {
                    loadingText.textContent = messages[messageIndex];
                    loadingText.style.opacity = '1';
                }, 200);
            }
        }, 2500);
    },
    
    stopLoadingAnimation() {
        if (this.loadingInterval) {
            clearInterval(this.loadingInterval);
            this.loadingInterval = null;
        }
    },
    
    // Generate unique user ID
    generateUserId() {
        const stored = localStorage.getItem('portfolio-user-id');
        if (stored) return stored;
        
        const newId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('portfolio-user-id', newId);
        return newId;
    },
    
    // Generate session ID
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    // Initialize session
    async initialize() {
        this.userId = this.generateUserId();
        this.sessionId = this.generateSessionId();
        
        try {
            const response = await fetch(`${this.API_BASE}/sessions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    app_name: this.APP_NAME,
                    user_id: this.userId,
                    session_id: this.sessionId
                })
            });
            
            if (response.ok) {
                this.isReady = true;
                console.log('✅ Server AI session created:', this.sessionId);
                return true;
            } else {
                console.error('Failed to create session:', response.status);
                return false;
            }
        } catch (error) {
            console.error('Error creating session:', error);
            return false;
        }
    },
    
    // Send message with SSE streaming
    async sendMessage(userMessage) {
        // Abort any pending request
        if (this.currentXHR) {
            this.currentXHR.abort();
            this.currentXHR = null;
        }
        
        // Ensure session exists
        if (!this.sessionId) {
            await this.initialize();
        }
        
        // Clear input immediately
        chatInput.value = '';
        
        // Add user message to UI
        const userMsgElement = createMessage('You', userMessage, true);
        chatContent.appendChild(userMsgElement);
        
        // Add to conversation history
        this.conversationHistory.push({ role: 'user', content: userMessage });
        
        // Create assistant message container
        const isFirstMsg = this.isFirstMessage;
        const loadingContent = isFirstMsg 
            ? '<span class="homelab-loading"><span class="loading-emoji">🖥️</span><span class="loading-text">Waking up the M1 Mac... ☕</span></span>'
            : '<span class="typing-indicator">Thinking...</span>';
        
        const assistantMsgElement = createMessage('Assistant', loadingContent, false);
        chatContent.appendChild(assistantMsgElement);
        const assistantContent = assistantMsgElement.querySelector('.message-content');
        
        // Start rotating messages for first message (cold start likely)
        if (isFirstMsg) {
            this.startLoadingAnimation(assistantContent);
        }
        
        // Scroll to bottom
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        const self = this;
        
        try {
            // Use XMLHttpRequest for better SSE streaming support in browsers
            const fullReply = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                self.currentXHR = xhr;
                
                xhr.open('POST', `${self.API_BASE}/run_sse`, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Accept', 'text/event-stream');
                xhr.setRequestHeader('Cache-Control', 'no-cache');
                
                let reply = '';
                let lastIndex = 0;
                let contentCleared = false;
                
                // Initialize streaming markdown renderer (will be set up on first data)
                let renderer = null;
                let parser = null;
                
                xhr.onprogress = function() {
                    // Clear loading and set up renderer on first data received
                    if (!contentCleared) {
                        self.stopLoadingAnimation();
                        self.isFirstMessage = false;
                        assistantContent.innerHTML = '';
                        contentCleared = true;
                        
                        // Initialize streaming markdown renderer
                        if (typeof smd !== 'undefined') {
                            renderer = smd.default_renderer(assistantContent);
                            parser = smd.parser(renderer);
                        }
                    }
                    
                    // Get only the new part of the response
                    const newData = xhr.responseText.substring(lastIndex);
                    lastIndex = xhr.responseText.length;
                    
                    const lines = newData.split('\n');
                    
                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            const data = line.slice(6).trim();
                            
                            if (data === '[DONE]') {
                                continue;
                            }
                            
                            try {
                                const parsed = JSON.parse(data);
                                if (parsed.text && !parsed.is_final) {
                                    reply += parsed.text;
                                    
                                    if (parser) {
                                        smd.parser_write(parser, parsed.text);
                                    } else {
                                        assistantContent.textContent = reply;
                                    }
                                    
                                    // Auto-scroll while streaming
                                    chatMessages.scrollTop = chatMessages.scrollHeight;
                                }
                            } catch (e) {
                                // Skip invalid JSON
                            }
                        }
                    }
                };
                
                xhr.onload = function() {
                    self.currentXHR = null;
                    if (xhr.status === 200) {
                        if (parser) {
                            try { smd.parser_end(parser); } catch(e) {}
                        }
                        resolve(reply);
                    } else {
                        reject(new Error(`HTTP error! status: ${xhr.status}`));
                    }
                };
                
                xhr.onerror = function() {
                    self.currentXHR = null;
                    self.stopLoadingAnimation();
                    // Try to recreate session on next request
                    self.sessionId = null;
                    reject(new Error('Network error'));
                };
                
                xhr.onabort = function() {
                    self.currentXHR = null;
                    self.stopLoadingAnimation();
                };
                
                xhr.send(JSON.stringify({
                    app_name: self.APP_NAME,
                    user_id: self.userId,
                    session_id: self.sessionId,
                    new_message: {
                        role: 'user',
                        parts: [{ text: userMessage }]
                    },
                    streaming: true
                }));
            });
            
            // Final scroll
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Add to conversation history
            this.conversationHistory.push({ role: 'assistant', content: fullReply });
            
            // Keep conversation history manageable
            if (this.conversationHistory.length > 20) {
                this.conversationHistory = this.conversationHistory.slice(-20);
            }
            
        } catch (error) {
            console.error('Server chat error:', error);
            assistantContent.innerHTML = `<div class="error-message">
                <p>❌ Couldn't reach Vishal's server. It might be sleeping! 😴</p>
                <p>Try switching to <strong>Local AI</strong> mode, or use the sidebar to explore.</p>
            </div>`;
        }
    }
};

// ===== Local WebLLM Chat Manager (Privacy Mode) =====
const LocalChatManager = {
    engine: null,
    isInitializing: false,
    isInitialized: false,
    conversationHistory: [],
    webGPUSupported: false,
    
    // Generate system prompt with portfolio context
    getSystemPrompt() {
        return `You are Vishal's personal AI assistant on his portfolio website.

RESPONSE RULES (FOLLOW STRICTLY):
1. Answer ONLY what is asked - nothing more
2. Keep responses concise: 1-3 sentences for simple questions, more only if specifically asked
3. Don't list everything - pick the most relevant points
4. Be conversational and smart, not robotic
5. Use markdown sparingly (bold for emphasis, bullets only when listing multiple items)
6. Maximum one emoji per response
7. If someone asks "tell me everything" or wants details, then elaborate

VISHAL'S COMPLETE PROFILE:

Current Role:
- Technical Lead at Lumiq (Feb 2022 - Present)
- Leading emPower pryzm - data reliability platform for financial services
- Built technology stack for 2 sub-products from scratch
- Managing teams of Data Engineers, Full Stack Engineers, Designers, Testers
- Expertise in real-time data-driven architecture, enterprise software deployment

Previous Experience:
- Technical Product Lead at LimeChat (Aug 2020 - Jan 2022)
  - Built AI help desk for e-commerce from scratch
  - Managed team of 10 (backend, frontend, testers, designers)
  - Led 20+ agile sprints
  - Launched Shopify App, Android App, iOS App
  
- Founder at AirTrik (Aug 2019 - Jul 2020)
  - Built PaaS for Industrial IoT applications
  - Published Android App, NPM package, Python package
  - Tech: Python, Django, C, Apache, Mosquitto, Docker, AWS

Technical Skills:
- Frontend: HTML5, CSS3, JavaScript (ES6+), Angular, Responsive Design
- Backend: Node.js, Python, MySQL, PostgreSQL, RESTful APIs, Microservices
- Cloud/DevOps: AWS, Docker, Kubernetes, ArgoCD
- Message Queues: Kafka, RabbitMQ
- Auth: Keycloak
- Tools: VS Code, Git, GitHub, Notion, Metabase
- Other: IoT Development, C Programming, NPM packages, Python packages (pip)

Projects:
1. Lumiq emPower pryzm - Data reliability platform (pryzm.ai)
2. LimeChat AI Help Desk - E-commerce support (limechat.ai)
3. AirTrik IoT Platform - Industrial IoT PaaS
4. Real-time P2P Serverless Chat - WebRTC based
5. HiCard - NFC contact sharing (hicard.in)
6. Retro Games - Car racing, Tetris, Rock Paper Scissors

Education:
- B.Tech + M.Tech (Integrated) - Computer Science, Gautam Buddha University (2015-2020)
- Specialization: Artificial Intelligence and Robotics
- CGPA: 8.0/10.0
- 12th: R.P.V.V No.1, Raj Niwas Marg - 85.6%

Leadership:
- Led cross-functional teams (10+ members)
- 20+ sprint cycles managed
- Hiring & interviewing experience
- Stakeholder management

Contact:
- Email: contact@vishalpandey.co.in
- Phone: +91 97171 30893
- Website: vishalpandey.co.in
- LinkedIn: linkedin.com/in/thevishalpandey
- GitHub: github.com/vishal-pandey
- YouTube: youtube.com/@pandeyvishal

Hobbies: Photography, Videography, YouTube content creation, Game development

EXAMPLES OF GOOD RESPONSES:
Q: "What does Vishal do?" → "Vishal is a **Technical Lead** at Lumiq, building data reliability platforms for financial enterprises. 🚀"
Q: "What are his skills?" → "He's proficient in **Node.js, Python, Angular, AWS, Docker, Kubernetes**, and Kafka, with strong expertise in real-time architectures."
Q: "Tell me about LimeChat" → "At LimeChat, Vishal was **Technical Product Lead** where he built their AI help desk from scratch, managed a team of 10, and launched apps on Shopify, Android, and iOS. 💼"
Q: "Email?" → "**contact@vishalpandey.co.in**"`;
    },
    
    // Check WebGPU support
    async checkWebGPUSupport() {
        if (!navigator.gpu) {
            this.webGPUSupported = false;
            return false;
        }
        
        try {
            const adapter = await navigator.gpu.requestAdapter();
            this.webGPUSupported = !!adapter;
            return this.webGPUSupported;
        } catch (e) {
            this.webGPUSupported = false;
            return false;
        }
    },
    
    // Show compatibility warning
    showCompatibilityWarning() {
        const description = document.getElementById('modeDescription');
        if (description) {
            description.innerHTML = '<span class="ai-status-dot offline"></span>WebGPU not supported • Use Cloud AI instead';
        }
        
        const warningMessage = createMessage('System', `
            <div class="warning-box">
                <h3>⚠️ Local AI Not Available</h3>
                <p>Your browser doesn't support WebGPU, which is required for local AI.</p>
                <p><strong>Options:</strong></p>
                <ul>
                    <li>Use <strong>Cloud AI</strong> mode (toggle above) - works everywhere!</li>
                    <li>Or try Chrome 113+, Edge 113+, or Safari 18+</li>
                </ul>
            </div>
        `, false);
        chatContent.appendChild(warningMessage);
    },
    
    // Humorous loading messages
    loadingMessages: [
        "Downloading AI to your device... 🚀",
        "Teaching AI about Vishal locally... 📚",
        "Securing your privacy fortress... 🏰",
        "No servers involved, promise! 🤫",
        "Your GPU is getting a workout... 💪",
        "100% offline AI coming up... 🔒",
        "NSA-proof chat loading... 🕵️",
        "Building your personal AI bunker... 🛡️",
        "Downloading digital brain cells... 🧠",
        "Your secrets are safe here... 🤐"
    ],
    
    getRandomLoadingMessage() {
        return this.loadingMessages[Math.floor(Math.random() * this.loadingMessages.length)];
    },
    
    // Initialize WebLLM engine
    async initialize() {
        if (this.isInitializing || this.isInitialized) return;
        
        // Check WebGPU support first
        const hasWebGPU = await this.checkWebGPUSupport();
        if (!hasWebGPU) {
            this.showCompatibilityWarning();
            return;
        }
        
        this.isInitializing = true;
        AIModeManager.updateUI();
        
        // Get loading indicator elements
        const loadingIndicator = document.getElementById('aiLoadingIndicator');
        const loadingText = document.getElementById('aiLoadingText');
        const loadingBar = document.getElementById('aiLoadingBar');
        const description = document.getElementById('modeDescription');
        
        // Show compact loading indicator
        if (loadingIndicator) {
            loadingIndicator.style.display = 'block';
            loadingText.textContent = this.getRandomLoadingMessage();
        }
        
        // Rotate humorous messages every 3 seconds
        const messageInterval = setInterval(() => {
            if (loadingText && this.isInitializing) {
                loadingText.textContent = this.getRandomLoadingMessage();
            }
        }, 3000);
        
        const loadingPercent = document.getElementById('aiLoadingPercent');
        
        try {
            const initProgressCallback = (progress) => {
                const percent = Math.round(progress.progress * 100);
                if (loadingBar) loadingBar.style.width = percent + '%';
                if (loadingPercent) loadingPercent.textContent = percent + '%';
            };
            
            const selectedModel = "Llama-3.2-3B-Instruct-q4f16_1-MLC";
            
            this.engine = await window.webllm.CreateMLCEngine(
                selectedModel,
                { initProgressCallback }
            );
            
            this.isInitialized = true;
            this.isInitializing = false;
            
            clearInterval(messageInterval);
            
            if (loadingIndicator) {
                loadingIndicator.style.display = 'none';
            }
            
            // Update UI
            AIModeManager.updateUI();
            
            console.log('✅ Local AI (WebLLM) initialized successfully!');
            
        } catch (error) {
            console.error('Failed to initialize WebLLM:', error);
            this.isInitializing = false;
            
            clearInterval(messageInterval);
            
            if (loadingIndicator) {
                loadingIndicator.style.display = 'none';
            }
            
            if (description) {
                description.innerHTML = '<span class="ai-status-dot offline"></span>Local AI failed • Switch to Cloud AI';
            }
        }
    },
    
    // Send message and get response
    async sendMessage(userMessage) {
        if (!this.isInitialized) {
            await this.initialize();
            if (!this.isInitialized) return;
        }
        
        // Clear input immediately
        chatInput.value = '';
        
        // Add user message to UI
        const userMsgElement = createMessage('You', userMessage, true);
        chatContent.appendChild(userMsgElement);
        
        // Add to conversation history
        this.conversationHistory.push({ role: 'user', content: userMessage });
        
        // Create assistant message container
        const assistantMsgElement = createMessage('Assistant', '<span class="typing-indicator">Thinking locally...</span>', false);
        chatContent.appendChild(assistantMsgElement);
        const assistantContent = assistantMsgElement.querySelector('.message-content');
        
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        try {
            const messages = [
                { role: 'system', content: this.getSystemPrompt() },
                ...this.conversationHistory
            ];
            
            const chunks = await this.engine.chat.completions.create({
                messages,
                temperature: 0.7,
                max_tokens: 1024,
                stream: true,
                stream_options: { include_usage: false }
            });
            
            let reply = '';
            assistantContent.innerHTML = '';
            
            let renderer = null;
            let parser = null;
            if (typeof smd !== 'undefined') {
                renderer = smd.default_renderer(assistantContent);
                parser = smd.parser(renderer);
            }
            
            for await (const chunk of chunks) {
                const delta = chunk.choices[0]?.delta?.content || '';
                reply += delta;
                
                if (parser) {
                    smd.parser_write(parser, delta);
                } else {
                    assistantContent.textContent = reply;
                }
                
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            if (parser) {
                smd.parser_end(parser);
            }
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            this.conversationHistory.push({ role: 'assistant', content: reply });
            
            if (this.conversationHistory.length > 10) {
                this.conversationHistory = this.conversationHistory.slice(-10);
            }
            
        } catch (error) {
            console.error('Local chat error:', error);
            assistantContent.innerHTML = `<div class="error-message">
                <p>❌ Local AI encountered an error.</p>
                <p>Try refreshing or switch to <strong>Cloud AI</strong> mode.</p>
            </div>`;
        }
    }
};

// Event listener for send button
sendBtn.addEventListener('click', async () => {
    const message = chatInput.value.trim();
    if (message) {
        // Hide welcome screen if visible
        if (welcomeScreen.style.display !== 'none') {
            welcomeScreen.style.display = 'none';
        }
        
        // Use the active chat manager based on mode
        const activeManager = AIModeManager.getActiveManager();
        await activeManager.sendMessage(message);
    }
});

// Event listener for Enter key
chatInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            // Hide welcome screen if visible
            if (welcomeScreen.style.display !== 'none') {
                welcomeScreen.style.display = 'none';
            }
            
            // Use the active chat manager based on mode
            const activeManager = AIModeManager.getActiveManager();
            await activeManager.sendMessage(message);
        }
    }
});

// Initialize on page load
window.addEventListener('load', async () => {
    // Initialize the AI mode manager
    AIModeManager.init();
    
    // Initialize server chat session (default mode)
    setTimeout(async () => {
        await ServerChatManager.initialize();
    }, 500);
});

// Settings & Help button functionality
const settingsBtn = document.getElementById('settingsBtn');
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        const currentMode = AIModeManager.currentMode;
        const modeInfo = currentMode === 'server' 
            ? '🖥️ **Homelab AI** (Default) - Running on Vishal\'s M1 Mac'
            : '🔒 **Your Device** - Runs entirely on your machine using WebGPU';
        
        const helpMessage = `
### 🛠️ Settings & Help

**Current Mode:** ${modeInfo}

---

### AI Chat Modes

**🖥️ Homelab AI (Recommended)**
- Instant responses from Vishal's personal M1 MacBook
- Powered by Ollama running in his homelab cluster
- Fast & always ready (unless the Mac is sleeping 😴)
- Works on all devices and browsers

**🔒 Your Device (Privacy Mode)**
- Don't trust Vishal's server? Run it yourself!
- 100% private - nothing leaves your device
- Requires ~2GB download (cached after first use)
- Needs WebGPU support (Chrome 113+, Edge 113+, Safari 18+)

---

### Keyboard Shortcuts
- **Enter** - Send message
- **Shift + Enter** - New line

### Troubleshooting
- **Cloud AI not responding?** The server might be sleeping - try again in a moment
- **Local AI not loading?** Clear site data: DevTools → Application → Storage
- **Mode not switching?** Refresh the page and try again

### Quick Navigation
- Use the sidebar menu to explore different sections
- Click "Home" to return to the welcome screen

### Contact
- 📧 contact@vishalpandey.co.in
- 💻 github.com/vishal-pandey
- 💼 linkedin.com/in/thevishalpandey

---

*Built with ❤️ by Vishal Pandey*
        `.trim();

        // Hide welcome screen
        welcomeScreen.style.display = 'none';
        
        // Clear chat content and show help
        chatContent.innerHTML = '';
        const helpMsg = createMessage('System', helpMessage, false, true);
        chatContent.appendChild(helpMsg);
        
        // Scroll to top
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.scrollTop = 0;
        
        // Update active state
        menuItems.forEach(item => item.classList.remove('active'));
        newChatBtn.classList.remove('active');
        settingsBtn.classList.add('active');
        
        // Close mobile sidebar
        closeMobileSidebar();
    });
}

// ===== Fun Facts Carousel =====
const FunFactsManager = {
    facts: [
        { emoji: '🤔', text: "This AI is running on a MacBook hiding in my closet. Yes, that's my 'homelab'." },
        { emoji: '😅', text: "I mass produce more projects than I can count. Most work. Some don't. We don't talk about those." },
        { emoji: '🔥', text: "I've mass refactored codebases at 3am. No regrets. Okay, some regrets." },
        { emoji: '🎮', text: "Built Tetris, Snake, and a Brick Game. Yes, I mass produce nostalgia." },
        { emoji: '🧠', text: "Made a neural network in pure JavaScript. Why? Kuch bhi." },
        { emoji: '💸', text: "Looking for help with: Money. Paise chahiye bhai dedo." },
        { emoji: '🐘', text: "Fun fact: 1 baar 1 hathi ne chiti se kaha... actually nvm" },
        { emoji: '🤷', text: "Ask me about: Kuch bhi pooch lo par bataunga nahi" },
        { emoji: '😴', text: "Currently working on: Kuch Bhi Nahi (and mass learning everything)" },
        { emoji: '🚀', text: "Started a startup from my college room. Mass chaos, mass fun." },
        { emoji: '🤖', text: "This portfolio has AI. The AI knows everything. I'm mass scared." },
        { emoji: '👋', text: "Ye last fact hai. Bye. Full stop. Khatam. Why are you still here?" },
    ],
    currentIndex: 0,
    interval: null,
    
    init() {
        const card = document.getElementById('funFactCard');
        if (!card) return;
        
        // Click to show next fact
        card.addEventListener('click', () => this.showNext());
        
        // Auto-rotate every 5 seconds
        this.interval = setInterval(() => this.showNext(), 5000);
    },
    
    showNext() {
        this.currentIndex = (this.currentIndex + 1) % this.facts.length;
        const fact = this.facts[this.currentIndex];
        
        const emojiEl = document.getElementById('factEmoji');
        const textEl = document.getElementById('factText');
        
        if (emojiEl && textEl) {
            // Fade out
            emojiEl.style.opacity = '0';
            textEl.style.opacity = '0';
            
            setTimeout(() => {
                emojiEl.textContent = fact.emoji;
                textEl.textContent = fact.text;
                // Fade in
                emojiEl.style.opacity = '1';
                textEl.style.opacity = '1';
            }, 200);
        }
    }
};

// Initialize fun facts
FunFactsManager.init();

// ===== Sample Questions Handler =====
document.querySelectorAll('.sample-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.dataset.question;
        if (question) {
            chatInput.value = question;
            // Trigger the send button click
            sendBtn.click();
        }
    });
});

console.log('🚀 Portfolio loaded! Cloud AI ready, Local AI available on demand.');
