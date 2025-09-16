// EduHub Platform JavaScript - Fixed Version
class EduHubApp {
    constructor() {
        this.platformData = {
            "platforms": [
                {
                    "id": "pw",
                    "name": "Physics Wallah",
                    "shortName": "PW",
                    "description": "JEE & NEET के लिए किफायती गुणवत्तापूर्ण शिक्षा",
                    "color": "#FF6B35",
                    "logo": "PW",
                    "stats": {
                        "courses": 150,
                        "students": "2M+",
                        "subjects": 8
                    },
                    "categories": ["JEE Main", "JEE Advanced", "NEET", "Class 11", "Class 12", "Foundation"],
                    "subjects": ["Physics", "Chemistry", "Mathematics", "Biology"],
                    "contentTypes": ["Video Lectures", "Notes", "Test Series", "Live Classes"],
                    "courses": [
                        {
                            "id": "pw_jee_physics",
                            "title": "Complete Physics for JEE Main & Advanced",
                            "instructor": "Alakh Pandey",
                            "duration": "120 hours",
                            "level": "Advanced",
                            "category": "JEE Main",
                            "subject": "Physics",
                            "contentType": "Video Lectures",
                            "description": "JEE के लिए comprehensive physics course जिसमें detailed explanations और problem-solving techniques हैं।",
                            "thumbnail": "https://via.placeholder.com/300x200/FF6B35/white?text=PW+Physics",
                            "rating": 4.8,
                            "students": 45000
                        },
                        {
                            "id": "pw_neet_bio",
                            "title": "NEET Biology Complete Course", 
                            "instructor": "Vipin Sharma",
                            "duration": "80 hours",
                            "level": "Intermediate",
                            "category": "NEET",
                            "subject": "Biology",
                            "contentType": "Video Lectures",
                            "description": "NEET के लिए complete biology preparation animated explanations और mnemonics के साथ।",
                            "thumbnail": "https://via.placeholder.com/300x200/FF6B35/white?text=PW+Biology",
                            "rating": 4.7,
                            "students": 38000
                        },
                        {
                            "id": "pw_jee_math",
                            "title": "Mathematics for JEE Main & Advanced",
                            "instructor": "Alakh Pandey",
                            "duration": "100 hours",
                            "level": "Advanced",
                            "category": "JEE Advanced",
                            "subject": "Mathematics",
                            "contentType": "Video Lectures",
                            "description": "JEE mathematics की complete preparation shortcuts और tricks के साथ।",
                            "thumbnail": "https://via.placeholder.com/300x200/FF6B35/white?text=PW+Math",
                            "rating": 4.9,
                            "students": 52000
                        }
                    ]
                },
                {
                    "id": "byjus",
                    "name": "BYJU'S",
                    "shortName": "BYJU'S",
                    "description": "इंटरैक्टिव कंटेंट के साथ व्यक्तिगत शिक्षा",
                    "color": "#6C63FF",
                    "logo": "BYJU'S",
                    "stats": {
                        "courses": 200,
                        "students": "100M+",
                        "subjects": 12
                    },
                    "categories": ["Class 1-3", "Class 4-6", "Class 7-10", "Class 11-12", "JEE", "NEET", "CAT"],
                    "subjects": ["Mathematics", "Science", "English", "Social Studies", "Physics", "Chemistry", "Biology"],
                    "contentTypes": ["Interactive Videos", "Games", "Assessments", "Personalized Learning"],
                    "courses": [
                        {
                            "id": "byjus_class10_math",
                            "title": "Class 10 Mathematics Complete Course",
                            "instructor": "BYJU'S Expert",
                            "duration": "60 hours",
                            "level": "Intermediate",
                            "category": "Class 7-10",
                            "subject": "Mathematics",
                            "contentType": "Interactive Videos",
                            "description": "Interactive math course 3D visualizations और gamified learning experience के साथ।",
                            "thumbnail": "https://via.placeholder.com/300x200/6C63FF/white?text=BYJU'S+Math",
                            "rating": 4.6,
                            "students": 125000
                        },
                        {
                            "id": "byjus_jee_chem",
                            "title": "JEE Chemistry Master Class",
                            "instructor": "BYJU'S Expert",
                            "duration": "90 hours", 
                            "level": "Advanced",
                            "category": "JEE",
                            "subject": "Chemistry",
                            "contentType": "Interactive Videos",
                            "description": "Advanced chemistry preparation interactive molecular models और virtual labs के साथ।",
                            "thumbnail": "https://via.placeholder.com/300x200/6C63FF/white?text=BYJU'S+Chemistry",
                            "rating": 4.5,
                            "students": 67000
                        },
                        {
                            "id": "byjus_class8_science",
                            "title": "Class 8 Science Foundation",
                            "instructor": "BYJU'S Expert",
                            "duration": "45 hours",
                            "level": "Beginner",
                            "category": "Class 7-10",
                            "subject": "Science",
                            "contentType": "Interactive Videos",
                            "description": "Class 8 science की foundation building interactive experiments के साथ।",
                            "thumbnail": "https://via.placeholder.com/300x200/6C63FF/white?text=BYJU'S+Science",
                            "rating": 4.4,
                            "students": 95000
                        }
                    ]
                },
                {
                    "id": "vedantu",
                    "name": "Vedantu",
                    "shortName": "Vedantu", 
                    "description": "विशेषज्ञ शिक्षकों के साथ लाइव ऑनलाइन ट्यूटरिंग",
                    "color": "#00C851",
                    "logo": "Vedantu",
                    "stats": {
                        "courses": 120,
                        "students": "1M+",
                        "subjects": 10
                    },
                    "categories": ["Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12", "JEE", "NEET", "CBSE", "ICSE"],
                    "subjects": ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Social Science"],
                    "contentTypes": ["Live Classes", "Recorded Sessions", "Doubt Solving", "Mock Tests"],
                    "courses": [
                        {
                            "id": "vedantu_class12_physics",
                            "title": "Class 12 Physics Live Course",
                            "instructor": "Pulkit Jain",
                            "duration": "75 hours",
                            "level": "Advanced",
                            "category": "Class 11-12",
                            "subject": "Physics",
                            "contentType": "Live Classes",
                            "description": "Interactive live physics classes real-time doubt clearing और peer interaction के साथ।",
                            "thumbnail": "https://via.placeholder.com/300x200/00C851/white?text=Vedantu+Physics",
                            "rating": 4.7,
                            "students": 28000
                        },
                        {
                            "id": "vedantu_neet_chem",
                            "title": "NEET Chemistry Complete Preparation",
                            "instructor": "Arvind Arora",
                            "duration": "85 hours",
                            "level": "Advanced",
                            "category": "NEET",
                            "subject": "Chemistry",
                            "contentType": "Live Classes",
                            "description": "NEET chemistry की comprehensive preparation live interactive sessions के साथ।",
                            "thumbnail": "https://via.placeholder.com/300x200/00C851/white?text=Vedantu+Chemistry",
                            "rating": 4.6,
                            "students": 35000
                        },
                        {
                            "id": "vedantu_class9_math",
                            "title": "Class 9 Mathematics Foundation",
                            "instructor": "Saurabh Kumar",
                            "duration": "50 hours",
                            "level": "Intermediate",
                            "category": "Class 9-10",
                            "subject": "Mathematics",
                            "contentType": "Live Classes",
                            "description": "Class 9 mathematics foundation strong concepts के साथ।",
                            "thumbnail": "https://via.placeholder.com/300x200/00C851/white?text=Vedantu+Math",
                            "rating": 4.5,
                            "students": 42000
                        }
                    ]
                }
            ],
            "userPreferences": {
                "selectedPlatforms": ["pw", "byjus", "vedantu"],
                "favoriteSubjects": ["Physics", "Mathematics"],
                "preferredContentTypes": ["Video Lectures", "Live Classes"],
                "dashboardLayout": "grid"
            },
            "recentActivity": [
                {
                    "type": "course_started",
                    "platform": "pw",
                    "course": "Complete Physics for JEE Main & Advanced",
                    "timestamp": "2025-09-15T10:30:00Z",
                    "platformColor": "#FF6B35"
                },
                {
                    "type": "test_completed",
                    "platform": "byjus",
                    "course": "Class 10 Mathematics",
                    "score": 85,
                    "timestamp": "2025-09-14T16:45:00Z",
                    "platformColor": "#6C63FF"
                },
                {
                    "type": "live_class",
                    "platform": "vedantu",
                    "course": "Class 12 Physics Live Course",
                    "timestamp": "2025-09-13T18:00:00Z",
                    "platformColor": "#00C851"
                }
            ]
        };

        this.currentPlatform = 'pw';
        this.filteredCourses = [];
        this.bookmarkedCourses = new Set();
        this.isInitialized = false;
    }

    init() {
        console.log('Initializing EduHub App...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        console.log('DOM ready, setting up application...');
        
        this.setupEventListeners();
        this.loadRecentActivity();
        this.loadPlatformCourses();
        this.loadUserPreferences();
        this.initializeSearch();
        
        this.isInitialized = true;
        console.log('EduHub App initialized successfully');
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');

        // Navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        console.log('Found nav links:', navLinks.length);
        
        navLinks.forEach((link, index) => {
            console.log(`Setting up nav link ${index}:`, link.dataset.section);
            link.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Nav link clicked:', link.dataset.section);
                const section = link.dataset.section;
                this.showSection(section);
            });
        });

        // Platform exploration buttons
        const exploreButtons = document.querySelectorAll('.explore-btn');
        console.log('Found explore buttons:', exploreButtons.length);
        
        exploreButtons.forEach((btn, index) => {
            console.log(`Setting up explore button ${index}:`, btn.dataset.platform);
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Explore button clicked:', btn.dataset.platform);
                const platform = btn.dataset.platform;
                this.currentPlatform = platform;
                this.showSection('platforms');
                this.switchPlatform(platform);
            });
        });

        // Platform tabs
        const platformTabs = document.querySelectorAll('.platform-tab');
        console.log('Found platform tabs:', platformTabs.length);
        
        platformTabs.forEach((tab, index) => {
            console.log(`Setting up platform tab ${index}:`, tab.dataset.platform);
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Platform tab clicked:', tab.dataset.platform);
                const platform = tab.dataset.platform;
                this.switchPlatform(platform);
            });
        });

        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('mainNav');
        if (mobileMenuBtn && nav) {
            console.log('Setting up mobile menu');
            mobileMenuBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Mobile menu clicked');
                nav.classList.toggle('active');
            });
        }

        // Filters
        const categoryFilter = document.getElementById('categoryFilter');
        const subjectFilter = document.getElementById('subjectFilter');
        const contentTypeFilter = document.getElementById('contentTypeFilter');

        if (categoryFilter) {
            console.log('Setting up category filter');
            categoryFilter.addEventListener('change', () => {
                console.log('Category filter changed');
                this.applyFilters();
            });
        }

        if (subjectFilter) {
            console.log('Setting up subject filter');
            subjectFilter.addEventListener('change', () => {
                console.log('Subject filter changed');
                this.applyFilters();
            });
        }

        if (contentTypeFilter) {
            console.log('Setting up content type filter');
            contentTypeFilter.addEventListener('change', () => {
                console.log('Content type filter changed');
                this.applyFilters();
            });
        }

        // Search
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');

        if (searchBtn) {
            console.log('Setting up search button');
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Search button clicked');
                this.performSearch();
            });
        }

        if (searchInput) {
            console.log('Setting up search input');
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    console.log('Search input enter pressed');
                    this.performSearch();
                }
            });
        }

        // Settings
        const savePreferencesBtn = document.getElementById('savePreferences');
        const saveLayoutBtn = document.getElementById('saveLayout');
        const testConnectionsBtn = document.getElementById('testConnections');

        if (savePreferencesBtn) {
            console.log('Setting up save preferences button');
            savePreferencesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Save preferences clicked');
                this.saveUserPreferences();
            });
        }

        if (saveLayoutBtn) {
            console.log('Setting up save layout button');
            saveLayoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Save layout clicked');
                this.saveLayoutSettings();
            });
        }

        if (testConnectionsBtn) {
            console.log('Setting up test connections button');
            testConnectionsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Test connections clicked');
                this.testAPIConnections();
            });
        }

        // Modal
        const closeModalBtn = document.getElementById('closeModal');
        const modalOverlay = document.querySelector('.modal-overlay');

        if (closeModalBtn) {
            console.log('Setting up close modal button');
            closeModalBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Close modal clicked');
                this.closeModal();
            });
        }

        if (modalOverlay) {
            console.log('Setting up modal overlay');
            modalOverlay.addEventListener('click', (e) => {
                console.log('Modal overlay clicked');
                this.closeModal();
            });
        }

        console.log('Event listeners setup complete');
    }

    showSection(sectionId) {
        console.log('Showing section:', sectionId);
        
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            console.log('Section activated:', sectionId);
        } else {
            console.error('Section not found:', sectionId);
        }

        // Update navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Load section-specific content
        if (sectionId === 'platforms') {
            this.loadPlatformCourses();
        } else if (sectionId === 'search') {
            this.initializeSearch();
        }
    }

    switchPlatform(platformId) {
        console.log('Switching to platform:', platformId);
        this.currentPlatform = platformId;
        
        // Update active tab
        const platformTabs = document.querySelectorAll('.platform-tab');
        platformTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        const activeTab = document.querySelector(`.platform-tab[data-platform="${platformId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
            console.log('Platform tab activated:', platformId);
        }

        this.loadPlatformCourses();
    }

    loadPlatformCourses() {
        console.log('Loading courses for platform:', this.currentPlatform);
        const platform = this.platformData.platforms.find(p => p.id === this.currentPlatform);
        if (!platform) {
            console.error('Platform not found:', this.currentPlatform);
            return;
        }

        // Update filters
        this.updateFilters(platform);

        // Load courses
        this.filteredCourses = [...platform.courses];
        this.renderCourses();
    }

    updateFilters(platform) {
        console.log('Updating filters for platform:', platform.id);
        
        const categoryFilter = document.getElementById('categoryFilter');
        const subjectFilter = document.getElementById('subjectFilter');
        const contentTypeFilter = document.getElementById('contentTypeFilter');

        if (categoryFilter) {
            categoryFilter.innerHTML = '<option value="">सभी श्रेणियां</option>';
            platform.categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });
        }

        if (subjectFilter) {
            subjectFilter.innerHTML = '<option value="">सभी विषय</option>';
            platform.subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = this.translateSubject(subject);
                subjectFilter.appendChild(option);
            });
        }

        if (contentTypeFilter) {
            contentTypeFilter.innerHTML = '<option value="">सभी प्रकार</option>';
            platform.contentTypes.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = this.translateContentType(type);
                contentTypeFilter.appendChild(option);
            });
        }
    }

    applyFilters() {
        console.log('Applying filters...');
        const platform = this.platformData.platforms.find(p => p.id === this.currentPlatform);
        if (!platform) return;

        const categoryFilter = document.getElementById('categoryFilter');
        const subjectFilter = document.getElementById('subjectFilter');
        const contentTypeFilter = document.getElementById('contentTypeFilter');

        const categoryValue = categoryFilter ? categoryFilter.value : '';
        const subjectValue = subjectFilter ? subjectFilter.value : '';
        const contentTypeValue = contentTypeFilter ? contentTypeFilter.value : '';

        this.filteredCourses = platform.courses.filter(course => {
            const matchesCategory = !categoryValue || course.category === categoryValue;
            const matchesSubject = !subjectValue || course.subject === subjectValue;
            const matchesContentType = !contentTypeValue || course.contentType === contentTypeValue;
            
            return matchesCategory && matchesSubject && matchesContentType;
        });

        console.log('Filtered courses:', this.filteredCourses.length);
        this.renderCourses();
    }

    renderCourses() {
        console.log('Rendering courses:', this.filteredCourses.length);
        const coursesGrid = document.getElementById('coursesGrid');
        if (!coursesGrid) {
            console.error('Courses grid not found');
            return;
        }

        if (this.filteredCourses.length === 0) {
            coursesGrid.innerHTML = `
                <div class="empty-state">
                    <h3>कोई कोर्स नहीं मिला</h3>
                    <p>कृपया अपने फिल्टर बदलें या दूसरा प्लेटफॉर्म चुनें।</p>
                </div>
            `;
            return;
        }

        const platform = this.platformData.platforms.find(p => p.id === this.currentPlatform);
        
        coursesGrid.innerHTML = this.filteredCourses.map(course => {
            return `
                <div class="course-card" data-course-id="${course.id}" tabindex="0">
                    <div class="course-thumbnail">
                        <img src="${course.thumbnail}" alt="${course.title}" loading="lazy">
                        <div class="course-platform-badge ${this.currentPlatform}-badge">${platform.shortName}</div>
                    </div>
                    <div class="course-content">
                        <h4 class="course-title">${course.title}</h4>
                        <p class="course-instructor">शिक्षक: ${course.instructor}</p>
                        <div class="course-meta">
                            <span class="course-duration">${course.duration}</span>
                            <span class="course-level">${this.translateLevel(course.level)}</span>
                        </div>
                        <div class="course-stats">
                            <div class="course-rating">
                                <span>⭐ ${course.rating}</span>
                            </div>
                            <div class="course-students">${this.formatNumber(course.students)} छात्र</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Add click handlers to course cards
        const courseCards = coursesGrid.querySelectorAll('.course-card');
        console.log('Adding click handlers to course cards:', courseCards.length);
        
        courseCards.forEach((card, index) => {
            console.log(`Setting up course card ${index}`);
            card.addEventListener('click', (e) => {
                const courseId = card.dataset.courseId;
                console.log('Course card clicked:', courseId);
                this.openCourseModal(courseId);
            });

            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    const courseId = card.dataset.courseId;
                    console.log('Course card key pressed:', courseId);
                    this.openCourseModal(courseId);
                }
            });
        });
    }

    openCourseModal(courseId) {
        console.log('Opening course modal for:', courseId);
        const course = this.findCourseById(courseId);
        if (!course) {
            console.error('Course not found:', courseId);
            return;
        }

        const modal = document.getElementById('resourceModal');
        const title = document.getElementById('resourceTitle');
        const instructor = document.getElementById('resourceInstructor');
        const duration = document.getElementById('resourceDuration');
        const level = document.getElementById('resourceLevel');
        const description = document.getElementById('resourceDescription');

        if (title) title.textContent = course.title;
        if (instructor) instructor.textContent = `शिक्षक: ${course.instructor}`;
        if (duration) duration.textContent = course.duration;
        if (level) level.textContent = this.translateLevel(course.level);
        if (description) description.textContent = course.description;

        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            console.log('Modal opened');
        }

        // Setup bookmark button
        const bookmarkBtn = modal?.querySelector('.bookmark-btn');
        if (bookmarkBtn) {
            const isBookmarked = this.bookmarkedCourses.has(courseId);
            bookmarkBtn.textContent = isBookmarked ? 'बुकमार्क हटाएं' : 'बुकमार्क करें';
            bookmarkBtn.onclick = (e) => {
                e.preventDefault();
                this.toggleBookmark(courseId);
            };
        }
    }

    closeModal() {
        console.log('Closing modal');
        const modal = document.getElementById('resourceModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    toggleBookmark(courseId) {
        console.log('Toggling bookmark for:', courseId);
        if (this.bookmarkedCourses.has(courseId)) {
            this.bookmarkedCourses.delete(courseId);
        } else {
            this.bookmarkedCourses.add(courseId);
        }

        // Update button text
        const bookmarkBtn = document.querySelector('.bookmark-btn');
        if (bookmarkBtn) {
            const isBookmarked = this.bookmarkedCourses.has(courseId);
            bookmarkBtn.textContent = isBookmarked ? 'बुकमार्क हटाएं' : 'बुकमार्क करें';
        }

        this.showNotification(
            this.bookmarkedCourses.has(courseId) ? 
            'कोर्स बुकमार्क किया गया!' : 
            'बुकमार्क हटाया गया!'
        );
    }

    performSearch() {
        console.log('Performing search...');
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        
        if (!searchTerm) {
            console.log('No search term provided');
            return;
        }

        console.log('Search term:', searchTerm);
        this.showLoading();

        // Simulate API delay
        setTimeout(() => {
            const results = this.searchAllPlatforms(searchTerm);
            console.log('Search results:', results.length);
            this.displaySearchResults(results);
            this.hideLoading();
        }, 1000);
    }

    searchAllPlatforms(searchTerm) {
        const results = [];
        const platformCheckboxes = document.querySelectorAll('input[type="checkbox"][value]');
        const selectedPlatforms = [];
        
        platformCheckboxes.forEach(checkbox => {
            if (checkbox.checked && checkbox.value) {
                selectedPlatforms.push(checkbox.value);
            }
        });

        // If no platforms selected, search all
        if (selectedPlatforms.length === 0) {
            selectedPlatforms.push('pw', 'byjus', 'vedantu');
        }

        console.log('Searching platforms:', selectedPlatforms);

        this.platformData.platforms.forEach(platform => {
            if (selectedPlatforms.includes(platform.id)) {
                const matchingCourses = platform.courses.filter(course => 
                    course.title.toLowerCase().includes(searchTerm) ||
                    course.instructor.toLowerCase().includes(searchTerm) ||
                    course.description.toLowerCase().includes(searchTerm) ||
                    course.subject.toLowerCase().includes(searchTerm)
                );

                matchingCourses.forEach(course => {
                    results.push({
                        ...course,
                        platformId: platform.id,
                        platformName: platform.name,
                        platformColor: platform.color
                    });
                });
            }
        });

        // Sort results
        const sortSelect = document.getElementById('searchSortBy');
        const sortBy = sortSelect ? sortSelect.value : 'relevance';
        return this.sortSearchResults(results, sortBy);
    }

    sortSearchResults(results, sortBy) {
        console.log('Sorting results by:', sortBy);
        switch (sortBy) {
            case 'rating':
                return results.sort((a, b) => b.rating - a.rating);
            case 'students':
                return results.sort((a, b) => b.students - a.students);
            case 'duration':
                return results.sort((a, b) => {
                    const aDuration = parseInt(a.duration.split(' ')[0]);
                    const bDuration = parseInt(b.duration.split(' ')[0]);
                    return aDuration - bDuration;
                });
            default:
                return results;
        }
    }

    displaySearchResults(results) {
        console.log('Displaying search results:', results.length);
        const searchResults = document.getElementById('searchResults');
        if (!searchResults) {
            console.error('Search results container not found');
            return;
        }

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="empty-state">
                    <h3>कोई परिणाम नहीं मिला</h3>
                    <p>कृपया अलग keywords या filters का प्रयोग करें।</p>
                </div>
            `;
            return;
        }

        searchResults.innerHTML = `
            <div class="search-results-header">
                <h3>${results.length} परिणाम मिले</h3>
            </div>
            <div class="courses-grid">
                ${results.map(course => `
                    <div class="course-card" data-course-id="${course.id}" tabindex="0">
                        <div class="course-thumbnail">
                            <img src="${course.thumbnail}" alt="${course.title}" loading="lazy">
                            <div class="course-platform-badge" style="background-color: ${course.platformColor}">${course.platformName}</div>
                        </div>
                        <div class="course-content">
                            <h4 class="course-title">${course.title}</h4>
                            <p class="course-instructor">शिक्षक: ${course.instructor}</p>
                            <div class="course-meta">
                                <span class="course-duration">${course.duration}</span>
                                <span class="course-level">${this.translateLevel(course.level)}</span>
                            </div>
                            <div class="course-stats">
                                <div class="course-rating">
                                    <span>⭐ ${course.rating}</span>
                                </div>
                                <div class="course-students">${this.formatNumber(course.students)} छात्र</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Add click handlers
        const courseCards = searchResults.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            card.addEventListener('click', () => {
                const courseId = card.dataset.courseId;
                console.log('Search result course clicked:', courseId);
                this.openCourseModal(courseId);
            });
        });
    }

    initializeSearch() {
        console.log('Initializing search...');
        // Setup platform checkboxes for search
        const platformCheckboxes = document.querySelectorAll('input[name="platform"]');
        console.log('Found platform checkboxes:', platformCheckboxes.length);
        
        platformCheckboxes.forEach(checkbox => {
            if (this.platformData.userPreferences.selectedPlatforms.includes(checkbox.value)) {
                checkbox.checked = true;
            }
        });
    }

    loadRecentActivity() {
        console.log('Loading recent activity...');
        const activityList = document.getElementById('activityList');
        if (!activityList) {
            console.error('Activity list not found');
            return;
        }

        activityList.innerHTML = this.platformData.recentActivity.map(activity => {
            const platform = this.platformData.platforms.find(p => p.id === activity.platform);
            const timeAgo = this.getTimeAgo(new Date(activity.timestamp));

            let activityText = '';
            let icon = '';

            switch (activity.type) {
                case 'course_started':
                    activityText = `${activity.course} शुरू किया`;
                    icon = '▶️';
                    break;
                case 'test_completed':
                    activityText = `${activity.course} में टेस्ट पूरा किया (स्कोर: ${activity.score}%)`;
                    icon = '✅';
                    break;
                case 'live_class':
                    activityText = `${activity.course} की लाइव क्लास में भाग लिया`;
                    icon = '🔴';
                    break;
            }

            return `
                <div class="activity-item">
                    <div class="activity-icon" style="background-color: ${activity.platformColor}">
                        ${icon}
                    </div>
                    <div class="activity-content">
                        <div class="activity-title">${activityText}</div>
                        <div class="activity-details">${platform?.name} • ${timeAgo}</div>
                    </div>
                </div>
            `;
        }).join('');

        console.log('Recent activity loaded');
    }

    loadUserPreferences() {
        console.log('Loading user preferences...');
        const prefs = this.platformData.userPreferences;

        // Load platform preferences
        const platformPrefs = document.querySelectorAll('#platformPrefs input[type="checkbox"]');
        platformPrefs.forEach(checkbox => {
            checkbox.checked = prefs.selectedPlatforms.includes(checkbox.value);
        });

        // Load subject preferences
        const subjectPrefs = document.querySelectorAll('#subjectPrefs input[type="checkbox"]');
        subjectPrefs.forEach(checkbox => {
            checkbox.checked = prefs.favoriteSubjects.includes(checkbox.value);
        });

        // Load layout preferences
        const layoutRadio = document.querySelector(`input[name="layout"][value="${prefs.dashboardLayout}"]`);
        if (layoutRadio) {
            layoutRadio.checked = true;
        }

        console.log('User preferences loaded');
    }

    saveUserPreferences() {
        console.log('Saving user preferences...');
        const selectedPlatforms = Array.from(document.querySelectorAll('#platformPrefs input:checked')).map(cb => cb.value);
        const favoriteSubjects = Array.from(document.querySelectorAll('#subjectPrefs input:checked')).map(cb => cb.value);

        this.platformData.userPreferences.selectedPlatforms = selectedPlatforms;
        this.platformData.userPreferences.favoriteSubjects = favoriteSubjects;

        console.log('Preferences saved:', selectedPlatforms, favoriteSubjects);
        this.showNotification('प्राथमिकताएं सेव हो गईं!');
    }

    saveLayoutSettings() {
        console.log('Saving layout settings...');
        const selectedLayout = document.querySelector('input[name="layout"]:checked');
        const cardsPerRow = document.getElementById('cardsPerRow');

        if (selectedLayout) {
            this.platformData.userPreferences.dashboardLayout = selectedLayout.value;
            console.log('Layout saved:', selectedLayout.value);
        }

        if (cardsPerRow) {
            console.log('Cards per row:', cardsPerRow.value);
        }

        this.showNotification('लेआउट सेटिंग्स सेव हो गईं!');
    }

    testAPIConnections() {
        console.log('Testing API connections...');
        this.showLoading();

        // Simulate API testing
        setTimeout(() => {
            // Update connection statuses randomly for demo
            const statuses = ['success', 'warning', 'error'];
            const statusTexts = ['जुड़ा हुआ', 'कनेक्शन की जांच करें', 'कनेक्ट नहीं है'];

            const connectionStatuses = document.querySelectorAll('.connection-status .status');
            connectionStatuses.forEach(status => {
                const randomIndex = Math.floor(Math.random() * 3);
                status.className = `status status--${statuses[randomIndex]}`;
                status.textContent = statusTexts[randomIndex];
            });

            this.hideLoading();
            console.log('API connection test completed');
            this.showNotification('API कनेक्शन टेस्ट पूरा!');
        }, 2000);
    }

    // Utility functions
    findCourseById(courseId) {
        for (const platform of this.platformData.platforms) {
            const course = platform.courses.find(c => c.id === courseId);
            if (course) return course;
        }
        return null;
    }

    translateSubject(subject) {
        const translations = {
            'Physics': 'भौतिक विज्ञान',
            'Chemistry': 'रसायन विज्ञान',
            'Mathematics': 'गणित',
            'Biology': 'जीव विज्ञान',
            'Science': 'विज्ञान',
            'English': 'अंग्रेजी',
            'Social Studies': 'सामाजिक अध्ययन',
            'Social Science': 'सामाजिक विज्ञान'
        };
        return translations[subject] || subject;
    }

    translateContentType(type) {
        const translations = {
            'Video Lectures': 'वीडियो लेक्चर',
            'Live Classes': 'लाइव क्लासेज',
            'Notes': 'नोट्स',
            'Test Series': 'टेस्ट सीरीज',
            'Interactive Videos': 'इंटरैक्टिव वीडियो',
            'Games': 'गेम्स',
            'Assessments': 'असेसमेंट',
            'Personalized Learning': 'व्यक्तिगत शिक्षा',
            'Recorded Sessions': 'रिकॉर्डेड सेशन',
            'Doubt Solving': 'संदेह निवारण',
            'Mock Tests': 'मॉक टेस्ट'
        };
        return translations[type] || type;
    }

    translateLevel(level) {
        const translations = {
            'Beginner': 'प्रारंभिक',
            'Intermediate': 'मध्यम',
            'Advanced': 'उन्नत'
        };
        return translations[level] || level;
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    getTimeAgo(date) {
        const now = new Date();
        const diffInMs = now - date;
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInDays > 0) {
            return `${diffInDays} दिन पहले`;
        } else if (diffInHours > 0) {
            return `${diffInHours} घंटे पहले`;
        } else {
            return 'अभी';
        }
    }

    showLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.remove('hidden');
        }
    }

    hideLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
        }
    }

    showNotification(message) {
        console.log('Showing notification:', message);
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-success);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the app
console.log('Starting EduHub App...');
const app = new EduHubApp();
app.init();