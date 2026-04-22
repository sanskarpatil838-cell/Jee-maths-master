// ============================================================
//  JEE Maths Master – n2.js  (Updated)
//  New Features: Login/Profile, Difficulty Levels, Sound Effects,
//                Ambient Music, Leaderboard, Performance Charts
// ============================================================

// ===== QUESTION DATA =====
const chapters = {
    "Sets, Relations, and Functions": [
        {q: "If R = {(x, y) : x, y ∈ Z, x² + 3y² ≤ 8} is a relation on the set of integers Z, then the domain of R⁻¹ is",
         o: ["{-2, -1, 1, 2}", "{0, 1}", "{-2, -1, 0, 1, 2}", "{-1, 0, 1}"],
         a: 3,
         s: "Given R = {(x, y) : x, y ∈ Z, x² + 3y² ≤ 8}\nWhen x = 0, 3y² ≤ 8 ⇒ y ∈ {-1, 0, 1}\nDomain of R⁻¹ = value of y = {-1, 0, 1}\nHence option d is the answer."},
        {q: "Let the function f: [0, 1] → R be defined by f(x) = 4ˣ/(4ˣ + 2). Then the value of f(1/40) + f(2/40) + f(3/40) + … + f(39/40) – f(1/2) is",
         o: ["19", "20", "39", "40"],
         a: 0,
         s: "Given f(x) = 4ˣ/(4ˣ + 2)\nf(1-x) = 4¹⁻ˣ/(4¹⁻ˣ + 2)\nf(x) + f(1-x) = 1\nSo f(1/40)+f(39/40)=1, forming 19 pairs.\nThus the expression = 19 + f(1/2) - f(1/2) = 19"},
        {q: "The function f: [0, 3] → [1, 29], defined by f(x) = 2x³ – 15x² + 36x + 1 is",
         o: ["one one and onto", "onto but not one one", "one one but not onto", "neither one one nor onto"],
         a: 1,
         s: "f'(x) = 6(x-2)(x-3), so f is not one-one (increases then decreases).\nf(0)=1, f(2)=29, range=[1,29] so f is onto.\nAnswer: onto but not one-one."},
        {q: "Let f(x) be a quadratic polynomial such that f(-1) + f(2) = 0. If one of the roots of f(x) = 0 is 3, then its other root lies in",
         o: ["(-3, -1)", "(1, 3)", "(-1, 0)", "(0, 1)"],
         a: 2,
         s: "Let f(x) = ax² + bx + c. Product of roots = c/a = -6/5.\nOne root is 3, so other root = -2/5 ∈ (-1,0).\nHence option c."},
        {q: "If f(x + y) = f(x)f(y) and ∑ₓ₌₁∞ f(x) = 2, x, y ∈ N, then f(4)/f(2) is:",
         o: ["2/3", "1/9", "1/3", "4/9"],
         a: 3,
         s: "f(n) = [f(1)]ⁿ. Using geometric sum, f(1) = 2/3.\nf(4)/f(2) = (2/3)^4/(2/3)^2 = (2/3)² = 4/9"},
        {q: "If f(x) = logₑ((1–x)/(1+x)), |x| < 1, then f(2x/(1+x²)) is equal to:",
         o: ["2f(x)", "2f(x²)", "(f(x))²", "-2f(x)"],
         a: 0,
         s: "Substituting 2x/(1+x²): f(2x/(1+x²)) = logₑ((1-x)²/(1+x)²) = 2logₑ((1-x)/(1+x)) = 2f(x)"},
        {q: "Let [t] denote the greatest integer ≤ t. The equation [x]² + 2[x+2] – 7 = 0 has",
         o: ["exactly four integral solutions", "infinitely many solutions", "no integral solution", "exactly two solutions"],
         a: 1,
         s: "Using [x+2]=[x]+2: [x]² + 2[x] - 3 = 0 ⇒ ([x]+3)([x]-1)=0.\n[x]=1: x∈[1,2); [x]=-3: x∈[-3,-2). Both are intervals → infinitely many solutions."},
        {q: "Let f(n) = [1/3 + 3n/100]·n, where [n] denotes greatest integer ≤ n. Then ∑ₙ₌₁⁵⁶ f(n) is equal to",
         o: ["56", "689", "1287", "1399"],
         a: 3,
         s: "For n=1 to 22: f(n)=0; for n=23 to 55: f(n)=n; for n=56: f(56)=2×56.\nSum = 23+24+...+55 + 112 = 1287 + 112 = 1399"},
        {q: "Let [t] denote the greatest integer ≤ t. The value of ∫₀³ [x²] dx is",
         o: ["3 - √3 - √2", "3 + √3 - √2", "5 - √3 - √2", "3 - √3 + √2"],
         a: 2,
         s: "Break [0,3] where x²=1,2: ∫₀¹ 0 dx + ∫₁^√2 1 dx + ∫_√2^√3 2 dx + ∫_√3^√... = 5 - √3 - √2"},
        {q: "If X = {4ⁿ – 3n – 1 : n ∈ N} and Y = {9(n–1) : n ∈ N}, then X∪Y is equal to",
         o: ["X", "Y", "N", "None"],
         a: 1,
         s: "4ⁿ – 3n – 1 = (1+3)ⁿ – 3n – 1 = 9[C(n,2) + ...] is always a multiple of 9.\nSo X ⊆ Y, hence X∪Y = Y."}
    ],
    "Complex Numbers and Quadratic Equations": [
        {q: "If z is a complex number such that |z| = 1, then the value of (1 + z)/(1 + z̅) is",
         o: ["z", "z̅", "1/z", "1"],
         a: 0,
         s: "Let z = cosθ + i sinθ.\n(1+z)/(1+z̅) = (1+cosθ+i sinθ)/(1+cosθ-i sinθ) = z"},
        {q: "The number of complex numbers z such that |z| = 1 and |z/z̅ + z̅/z| = 1 is",
         o: ["4", "6", "8", "infinite"],
         a: 0,
         s: "z/z̅ + z̅/z = 2cos2θ. |2cos2θ|=1 ⇒ cos2θ = ±1/2 ⇒ 4 solutions."},
        {q: "If the roots of x² – bx + c = 0 are two consecutive integers, then b² – 4c is",
         o: ["0", "1", "2", "3"],
         a: 1,
         s: "Roots n, n+1. Sum=2n+1=b, Product=n(n+1)=c.\nb²–4c=(2n+1)²–4n(n+1)=1"},
        {q: "The quadratic equation whose roots are reciprocal of the roots of ax² + bx + c = 0 is",
         o: ["cx² + bx + a = 0", "bx² + cx + a = 0", "cx² + ax + b = 0", "ax² + cx + b = 0"],
         a: 0,
         s: "New roots 1/α, 1/β: sum=-b/c, product=a/c.\nEquation: cx² + bx + a = 0"},
        {q: "If α, β are roots of x² + x + 1 = 0, then α² + β² =",
         o: ["1", "-1", "2", "-2"],
         a: 1,
         s: "α+β = -1, αβ = 1.\nα²+β² = (α+β)²–2αβ = 1–2 = -1"}
    ],
    "Permutations and Combinations": [
        {q: "The number of ways in which 5 boys and 3 girls can be seated in a row so that no two girls are together is",
         o: ["14400", "28800", "1440", "720"],
         a: 0,
         s: "Arrange 5 boys: 5!=120. Choose 3 of 6 gaps: C(6,3)=20. Arrange 3 girls: 3!=6.\nTotal: 120×20×6 = 14400"},
        {q: "The number of diagonals in a convex polygon of n sides is",
         o: ["n(n-1)/2", "n(n-3)/2", "n(n-2)/2", "n(n-4)/2"],
         a: 1,
         s: "Total lines: C(n,2) = n(n-1)/2. Subtract n sides.\nDiagonals = n(n-3)/2"},
        {q: "In how many ways can 5 different books be distributed among 3 students if each student gets at least one book?",
         o: ["150", "180", "210", "240"],
         a: 0,
         s: "Total: 3⁵=243. Subtract by inclusion-exclusion: 243–3–90 = 150"},
        {q: "The number of ways to arrange the letters of the word 'BANANA' is",
         o: ["60", "120", "180", "720"],
         a: 0,
         s: "6!/(3!×2!) = 720/12 = 60"},
        {q: "If ⁿC₈ = ⁿC₂, then n =",
         o: ["10", "12", "14", "16"],
         a: 0,
         s: "ⁿC₈ = ⁿC₂ ⇒ 8+2=n ⇒ n=10"}
    ],
    "Binomial Theorem": [
        {q: "The coefficient of x⁵ in the expansion of (1+x)²¹ + (1+x)²² + ... + (1+x)³⁰ is",
         o: ["⁵¹C₅", "⁵¹C₆", "³¹C₆ – ²¹C₆", "³⁰C₅ + ²⁰C₅"],
         a: 2,
         s: "Sum of GP; coefficient of x⁵ = ³¹C₆ – ²¹C₆"},
        {q: "If the coefficients of x⁷ and x⁸ in (2 + x/3)ⁿ are equal, then n =",
         o: ["55", "56", "57", "58"],
         a: 0,
         s: "Setting C(n,7)·2^(n-7)/3^7 = C(n,8)·2^(n-8)/3^8 gives n=55"},
        {q: "The sum of coefficients in (1 + x – 3x²)²¹⁶³ is",
         o: ["-1", "0", "1", "2"],
         a: 0,
         s: "Put x=1: (1+1-3)²¹⁶³ = (-1)²¹⁶³ = -1"},
        {q: "The greatest coefficient in the expansion of (1+x)¹⁰ is",
         o: ["C(10,5)", "C(10,6)", "C(10,4)", "C(10,7)"],
         a: 0,
         s: "For even n, greatest coefficient is C(n,n/2) = C(10,5)"},
        {q: "The term independent of x in (x + 1/x)¹⁰ is",
         o: ["C(10,5)", "C(10,4)", "C(10,3)", "C(10,2)"],
         a: 0,
         s: "Tᵣ₊₁ = C(10,r)·x^(10-2r). Set 10-2r=0 ⇒ r=5. Term = C(10,5)"}
    ],
    "Sequences and Series": [
        {q: "The sum of the series 1² + 3² + 5² + ... + (2n-1)² is",
         o: ["n(2n-1)(2n+1)/3", "n(4n²-1)/3", "n²(2n-1)", "n(4n²+1)/3"],
         a: 1,
         s: "Sum = 4Σr² – 4Σr + Σ1 = n(4n²-1)/3"},
        {q: "If a, b, c are in GP and a^(1/x) = b^(1/y) = c^(1/z), then x, y, z are in",
         o: ["AP", "GP", "HP", "None"],
         a: 0,
         s: "b²=ac ⇒ k^(2y)=k^(x+z) ⇒ 2y=x+z ⇒ x,y,z in AP"},
        {q: "The sum to infinity of 1 + 2/3 + 3/3² + 4/3³ + ... is",
         o: ["9/4", "3/2", "2", "3"],
         a: 0,
         s: "S – S/3 = 1 + 1/3 + 1/9 + ... = 3/2, so 2S/3 = 3/2 ⇒ S = 9/4"},
        {q: "If the sum of first n terms of an AP is 3n² + 5n, then its nth term is",
         o: ["6n+2", "6n-2", "6n+8", "6n-8"],
         a: 0,
         s: "aₙ = Sₙ – Sₙ₋₁ = (3n²+5n) – (3(n-1)²+5(n-1)) = 6n+2"},
        {q: "The sum 1/1·2 + 1/2·3 + ... + 1/n(n+1) is",
         o: ["n/(n+1)", "1/(n+1)", "1 – 1/(n+1)", "(n-1)/n"],
         a: 0,
         s: "Telescoping: 1/r(r+1) = 1/r – 1/(r+1). Sum = 1 – 1/(n+1) = n/(n+1)"}
    ],
    "Limits and Derivatives": [
        {q: "lim x→0 (tanx – sinx)/x³ =",
         o: ["0", "1/2", "1", "∞"],
         a: 1,
         s: "(tanx–sinx)/x³ = sinx(1–cosx)/(x³cosx) → (x·x²/2)/x³ = 1/2"},
        {q: "If y = xˣ, then dy/dx =",
         o: ["xˣ(1+lnx)", "xˣ lnx", "x^(x-1)", "xˣ(1-lnx)"],
         a: 0,
         s: "ln y = x ln x ⇒ (1/y)dy/dx = ln x + 1 ⇒ dy/dx = xˣ(1+ln x)"},
        {q: "lim x→0 (aˣ – bˣ)/x =",
         o: ["ln(a/b)", "ln a – ln b", "0", "1"],
         a: 1,
         s: "= lim (e^(x ln a) – e^(x ln b))/x = ln a – ln b"},
        {q: "The derivative of sin⁻¹(2x√(1–x²)) with respect to sin⁻¹x is",
         o: ["2", "1/2", "1", "0"],
         a: 0,
         s: "Let u = sin⁻¹x. y = sin⁻¹(sin 2u) = 2u. dy/du = 2"},
        {q: "lim x→∞ (1 + 1/x)ˣ =",
         o: ["0", "1", "e", "∞"],
         a: 2,
         s: "Standard definition of e"}
    ],
    "Trigonometry": [
        {q: "If sinθ + cosθ = 1, then the general value of θ is",
         o: ["2nπ or 2nπ + π/2", "2nπ + π/2", "nπ", "2nπ + π/4"],
         a: 0,
         s: "√2 sin(θ+π/4)=1 ⇒ θ=0 or π/2 for principal values; general: 2nπ or 2nπ+π/2"},
        {q: "The minimum value of 3cosθ + 4sinθ + 8 is",
         o: ["3", "5", "7", "9"],
         a: 0,
         s: "Min of 3cosθ+4sinθ = –√(9+16) = –5. So min = –5+8 = 3"},
        {q: "If tanθ = –4/3 and θ is in fourth quadrant, then sinθ =",
         o: ["–4/5", "4/5", "–3/5", "3/5"],
         a: 0,
         s: "In Q4, sin is negative. With tan=–4/3, sinθ = –4/5"},
        {q: "The number of solutions of sinx + sin2x + sin3x = 0 in [0, π] is",
         o: ["2", "3", "4", "5"],
         a: 2,
         s: "sin2x(2cosx+1)=0 ⇒ x=0, π/2, π and cosx=–1/2 ⇒ x=2π/3. Total: 4 solutions"},
        {q: "If A + B + C = π, then tanA + tanB + tanC =",
         o: ["tanA tanB tanC", "cotA cotB cotC", "sinA sinB sinC", "cosA cosB cosC"],
         a: 0,
         s: "Using A+B=π–C: tanA+tanB+tanC = tanA·tanB·tanC (identity for angles summing to π)"}
    ],
    "Coordinate Geometry": [
        {q: "The distance between lines 3x + 4y = 9 and 6x + 8y = 15 is",
         o: ["3/10", "3/5", "6/5", "9/10"],
         a: 0,
         s: "Lines parallel. Distance = |15/2–9|/5 = 1.5/5 = 3/10"},
        {q: "The equation of the circle passing through (1,0) and (0,1) with minimum radius is",
         o: ["x²+y²–x–y=0", "x²+y²+x+y=0", "x²+y²–2x–2y=0", "x²+y²+2x+2y=0"],
         a: 0,
         s: "Minimum radius when diameter chord; centre at (0.5,0.5): (x-0.5)²+(y-0.5)²=0.5 ⇒ x²+y²–x–y=0"},
        {q: "The area of triangle formed by y=x, y=2x, y=3x+4 is",
         o: ["4", "8", "12", "16"],
         a: 1,
         s: "Vertices: (0,0), (-2,-2), (-4,-8). Area = ½|det| = 4. Wait, recalc: = 8"},
        {q: "The locus of mid-point of intercept of x cosα + y sinα = p is",
         o: ["1/x²+1/y²=4/p²", "1/x²+1/y²=2/p²", "1/x²+1/y²=1/p²", "x²+y²=4p²"],
         a: 0,
         s: "Intercepts (p/cosα,0) and (0,p/sinα). Midpoint (h,k): h=p/2cosα, k=p/2sinα ⇒ 1/h²+1/k²=4/p²"},
        {q: "The angle between lines x²+2xy secθ+y²=0 is",
         o: ["θ", "2θ", "π/2–θ", "π/2+θ"],
         a: 0,
         s: "tanφ=2√(h²–ab)/(a+b)=2√(sec²θ–1)/2=|tanθ| ⇒ angle=θ"}
    ],
    "Three-Dimensional Geometry": [
        {q: "The equation of the plane through (1,2,3) parallel to 2x+3y+4z=5 is",
         o: ["2x+3y+4z=20", "2x+3y+4z=9", "2x+3y+4z=7", "2x+3y+4z=5"],
         a: 0,
         s: "Parallel plane: 2(1)+3(2)+4(3)=2+6+12=20. Equation: 2x+3y+4z=20"},
        {q: "The angle between lines with direction ratios (1,2,3) and (2,3,4) is",
         o: ["cos⁻¹(20/√406)", "cos⁻¹(√20/406)", "cos⁻¹(20/406)", "cos⁻¹(√406/20)"],
         a: 0,
         s: "cosθ = (1·2+2·3+3·4)/(√14·√29) = 20/√406"},
        {q: "If a line makes angles α, β, γ with axes, then cos2α + cos2β + cos2γ =",
         o: ["-1", "0", "1", "2"],
         a: 0,
         s: "cos²α+cos²β+cos²γ=1. cos2α+cos2β+cos2γ = 2(cos²α+cos²β+cos²γ)–3 = 2–3 = –1"},
        {q: "The distance between parallel planes 2x–y+3z=4 and 6x–3y+9z=13 is",
         o: ["1/(3√14)", "√14/3", "3/√14", "1/√14"],
         a: 0,
         s: "Rewrite: 2x–y+3z=4 and 2x–y+3z=13/3. Distance=|4–13/3|/√14=|1/3|/√14=1/(3√14)"},
        {q: "The volume of tetrahedron with vertices (0,0,0),(1,2,3),(2,3,4),(3,4,5) is",
         o: ["0", "1", "2", "3"],
         a: 0,
         s: "Vectors (1,2,3),(2,3,4),(3,4,5). det = 0, so volume = 0 (points coplanar)"}
    ],
    "Probability": [
        {q: "Three cards drawn from 52. Probability they are a king, queen, and jack is",
         o: ["16/5525", "64/2197", "16/22100", "64/5525"],
         a: 0,
         s: "(4/52)×(4/51)×(4/50)×3! = 384/132600 = 16/5525"},
        {q: "If A and B are independent with P(A)=0.3 and P(B)=0.4, then P(A∪B) =",
         o: ["0.12", "0.58", "0.7", "0.82"],
         a: 1,
         s: "P(A∪B) = 0.3+0.4–0.12 = 0.58"},
        {q: "A die is thrown twice. Probability that sum is divisible by 4 is",
         o: ["1/4", "1/3", "1/2", "2/3"],
         a: 0,
         s: "Favorable: (1,3),(2,2),(3,1),(2,6),(3,5),(4,4),(5,3),(6,2),(6,6) = 9. P=9/36=1/4"},
        {q: "The probability that a leap year has 53 Sundays is",
         o: ["2/7", "3/7", "4/7", "5/7"],
         a: 0,
         s: "366=52 weeks+2 days. Extra pairs containing Sunday: 2 out of 7. P=2/7"},
        {q: "If P(A)=0.4, P(B)=0.8 and P(B|A)=0.6, then P(A|B) =",
         o: ["0.3", "0.4", "0.5", "0.6"],
         a: 0,
         s: "P(A∩B)=P(B|A)·P(A)=0.24. P(A|B)=0.24/0.8=0.3"}
    ],
    "Statistics": [
        {q: "Mean deviation from mean for 4,7,8,9,10,12,13,17 is",
         o: ["3", "3.5", "4", "4.5"],
         a: 1,
         s: "Mean=10. Deviations: 6,3,2,1,0,2,3,7. MD=24/8=3"},
        {q: "If mean of 27,31,89,107,156 is 82, mean of 130,126,68,50,1 is",
         o: ["75", "82", "80", "157"],
         a: 0,
         s: "130+126+68+50+1=375. Mean=375/5=75"},
        {q: "The variance of first n natural numbers is",
         o: ["(n²-1)/12", "(n²+1)/12", "(n²-1)/6", "(n²+1)/6"],
         a: 0,
         s: "Standard result: Variance = (n²-1)/12"},
        {q: "If mean = 21 and median = 22, then mode is",
         o: ["20", "24", "22", "23"],
         a: 1,
         s: "Mode = 3·Median – 2·Mean = 66–42 = 24"},
        {q: "The standard deviation of 6,5,9,13,12,8,10 is",
         o: ["√6", "√7", "√(52/7)", "√52"],
         a: 1,
         s: "Mean=9. Variance=(9+16+0+16+9+1+1)/7=52/7. SD=√(52/7)"}
    ]
};

// ============================================================
// ===== USER PROFILE =====
// ============================================================
const AVATARS = ['🎓', '🦁', '🦊', '🐯', '🦅', '🚀', '⚡', '🔥', '💎', '🌟', '🎯', '🏆'];
const firebaseConfig = window.firebaseConfig || null;
const firebaseReady = typeof firebase !== 'undefined'
    && typeof window.isFirebaseConfigured === 'function'
    && window.isFirebaseConfigured(firebaseConfig);

const firebaseApp = firebaseReady
    ? (firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig))
    : null;
const auth = firebaseReady ? firebase.auth() : null;
const db = firebaseReady ? firebase.firestore() : null;
const googleProvider = firebaseReady ? new firebase.auth.GoogleAuthProvider() : null;

let currentUser = null;
let selectedAvatar = AVATARS[0];
let pendingProfileSeed = null;
let isSubmittingTest = false;
let testStartSnapshot = null;

function initApp() {
    createParticles();

    // Restore dark mode
    if (localStorage.getItem('jee_dark') === 'true') {
        document.body.classList.add('dark');
        const btn = document.getElementById('dark-btn');
        if (btn) btn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Restore sound pref
    soundEnabled = localStorage.getItem('jee_sound') !== 'false';
    updateSoundBtn();

    showLoginScreen();
    if (firebaseReady) {
        setAuthStatus('Choose Google or email login to continue.');
        auth.onAuthStateChanged(handleAuthStateChanged);
    } else {
        setAuthStatus('Add your Firebase project keys in firebase-config.js before signing in.', 'error');
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        const quizEl = document.getElementById('quiz');
        if (quizEl && quizEl.style.display !== 'none') {
            if (e.key === 'ArrowRight') nextQ();
            if (e.key === 'ArrowLeft') prevQ();
            if (e.key === 'm' || e.key === 'M') markQuestion();
        }
    });
}

function setAuthStatus(message, type = '') {
    const statusEl = document.getElementById('auth-status');
    if (!statusEl) return;
    statusEl.textContent = message || '';
    statusEl.className = type ? `auth-status ${type}` : 'auth-status';
}

function resetAuthInputs() {
    ['username-input', 'email-input', 'password-input'].forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.value = '';
            field.style.borderColor = '';
        }
    });
}

function resetUserState() {
    currentUser = null;
    leaderboard = [];
    testHistory = [];
    chapterHistory = {};
    totalPoints = 0;
    testsCompleted = 0;
    totalTimeSpent = 0;
    totalCorrectAnswers = 0;
    totalQuestionsAttempted = 0;
    sessionPoints = 0;
    currentChapter = '';
    testStartSnapshot = null;
}

function ensureFirebaseReady() {
    if (firebaseReady) return true;
    setAuthStatus('Firebase is not configured yet. Update firebase-config.js first.', 'error');
    return false;
}

function getAuthFormValues() {
    return {
        name: (document.getElementById('username-input')?.value || '').trim(),
        email: (document.getElementById('email-input')?.value || '').trim(),
        password: document.getElementById('password-input')?.value || ''
    };
}

function highlightField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.style.borderColor = 'var(--danger)';
    field.focus();
}

function getDefaultDisplayName(authUser, preferredName) {
    const emailName = authUser && authUser.email ? authUser.email.split('@')[0] : 'Student';
    return preferredName || authUser.displayName || emailName || 'Student';
}

function formatFirebaseError(error) {
    const messages = {
        'auth/email-already-in-use': 'That email is already registered. Try signing in instead.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/invalid-credential': 'Your email or password is incorrect.',
        'auth/missing-password': 'Please enter your password.',
        'auth/operation-not-allowed': 'This sign-in method is not enabled in Firebase yet.',
        'auth/popup-blocked': 'Popup blocked. Allow popups and try Google sign-in again.',
        'auth/popup-closed-by-user': 'Google sign-in was closed before finishing.',
        'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
        'auth/unauthorized-domain': 'This domain is not allowed in Firebase Authentication yet.',
        'auth/user-disabled': 'This account has been disabled in Firebase.',
        'auth/user-not-found': 'No account found for this email. Create an account first.',
        'auth/weak-password': 'Password should be at least 6 characters long.',
        'auth/wrong-password': 'Your email or password is incorrect.'
    };

    return messages[error.code] || error.message || 'Something went wrong. Please try again.';
}

function buildChapterHistoryFromAttempts(attempts) {
    const nextHistory = {};
    attempts.forEach((attempt) => {
        if (!nextHistory[attempt.chapter]) nextHistory[attempt.chapter] = [];
        nextHistory[attempt.chapter].push(attempt);
    });
    return nextHistory;
}

async function ensureUserProfile(authUser) {
    const userRef = db.collection('users').doc(authUser.uid);
    const snapshot = await userRef.get();
    const existing = snapshot.exists ? snapshot.data() : {};
    const seed = pendingProfileSeed || {};

    const profile = {
        uid: authUser.uid,
        name: existing.name || getDefaultDisplayName(authUser, seed.name),
        avatar: existing.avatar || seed.avatar || AVATARS[0],
        totalPoints: Number(existing.totalPoints || 0),
        testsCompleted: Number(existing.testsCompleted || 0),
        totalTimeSpent: Number(existing.totalTimeSpent || 0),
        totalCorrectAnswers: Number(existing.totalCorrectAnswers || 0),
        totalQuestionsAttempted: Number(existing.totalQuestionsAttempted || 0),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastLoginAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (!snapshot.exists) {
        profile.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    }

    await userRef.set(profile, { merge: true });
    pendingProfileSeed = null;

    return {
        uid: authUser.uid,
        name: profile.name,
        avatar: profile.avatar
    };
}

async function refreshLeaderboardFromCloud() {
    if (!currentUser || !db) return;

    const snapshot = await db.collection('users')
        .orderBy('totalPoints', 'desc')
        .limit(10)
        .get();

    leaderboard = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data()
    }));
}

async function loadCloudData() {
    if (!currentUser || !db) return;

    const userRef = db.collection('users').doc(currentUser.uid);
    const attemptsRef = userRef.collection('attempts');

    const [userSnapshot, attemptsSnapshot] = await Promise.all([
        userRef.get(),
        attemptsRef.orderBy('timestamp', 'asc').limit(100).get(),
        refreshLeaderboardFromCloud()
    ]);

    const userData = userSnapshot.exists ? userSnapshot.data() : {};
    totalPoints = Number(userData.totalPoints || 0);
    testsCompleted = Number(userData.testsCompleted || 0);
    totalTimeSpent = Number(userData.totalTimeSpent || 0);
    totalCorrectAnswers = Number(userData.totalCorrectAnswers || 0);
    totalQuestionsAttempted = Number(userData.totalQuestionsAttempted || 0);

    testHistory = attemptsSnapshot.docs.map((docSnapshot) => docSnapshot.data());
    chapterHistory = buildChapterHistoryFromAttempts(testHistory);
}

async function handleAuthStateChanged(authUser) {
    if (!authUser) {
        resetUserState();
        resetAuthInputs();
        showLoginScreen();
        if (firebaseReady) setAuthStatus('Choose Google or email login to continue.');
        return;
    }

    try {
        setAuthStatus('Loading your cloud profile...', 'success');
        currentUser = await ensureUserProfile(authUser);
        await loadCloudData();
        resetAuthInputs();
        showHomeScreen();
    } catch (error) {
        console.error('Failed to load authenticated user:', error);
        resetUserState();
        showLoginScreen();
        setAuthStatus(formatFirebaseError(error), 'error');
    }
}

function showLoginScreen() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('home').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'none';

    const grid = document.getElementById('avatar-grid');
    grid.innerHTML = AVATARS.map(a =>
        `<div class="avatar-option" onclick="pickAvatar(this, '${a}')">${a}</div>`
    ).join('');

    // Select first by default
    const firstOption = grid.querySelector('.avatar-option');
    if (firstOption) { firstOption.classList.add('selected'); selectedAvatar = AVATARS[0]; }
}

function pickAvatar(el, avatar) {
    document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    selectedAvatar = avatar;
}

async function createAccount() {
    if (!ensureFirebaseReady()) return;

    const { name, email, password } = getAuthFormValues();
    if (!name) {
        setAuthStatus('Please enter a display name for your account.', 'error');
        highlightField('username-input');
        return;
    }
    if (!email) {
        setAuthStatus('Please enter your email address.', 'error');
        highlightField('email-input');
        return;
    }
    if (!password) {
        setAuthStatus('Please enter a password.', 'error');
        highlightField('password-input');
        return;
    }

    pendingProfileSeed = { name, avatar: selectedAvatar };
    setAuthStatus('Creating your account...', 'success');

    try {
        const credential = await auth.createUserWithEmailAndPassword(email, password);
        if (credential.user) {
            await credential.user.updateProfile({ displayName: name });
        }
    } catch (error) {
        pendingProfileSeed = null;
        setAuthStatus(formatFirebaseError(error), 'error');
    }
}

function doLogin() {
    return createAccount();
}

async function signInWithEmail() {
    if (!ensureFirebaseReady()) return;

    const { name, email, password } = getAuthFormValues();
    if (!email) {
        setAuthStatus('Please enter your email address.', 'error');
        highlightField('email-input');
        return;
    }
    if (!password) {
        setAuthStatus('Please enter your password.', 'error');
        highlightField('password-input');
        return;
    }

    pendingProfileSeed = { name, avatar: selectedAvatar };
    setAuthStatus('Signing you in...', 'success');

    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        pendingProfileSeed = null;
        setAuthStatus(formatFirebaseError(error), 'error');
    }
}

async function signInWithGoogle() {
    if (!ensureFirebaseReady()) return;

    const { name } = getAuthFormValues();
    pendingProfileSeed = { name, avatar: selectedAvatar };
    setAuthStatus('Opening Google sign-in...', 'success');

    try {
        await auth.signInWithPopup(googleProvider);
    } catch (error) {
        pendingProfileSeed = null;
        setAuthStatus(formatFirebaseError(error), 'error');
    }
}

function showHomeScreen() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'none';

    document.getElementById('user-avatar-display').textContent = currentUser.avatar;
    document.getElementById('user-name-display').textContent = currentUser.name;
    document.getElementById('welcome-avatar').textContent = currentUser.avatar;
    document.getElementById('welcome-name').textContent = `Welcome, ${currentUser.name}!`;

    // Motivational message
    const msgs = ['Ready to ace JEE today?', 'Keep up the great work!', 'Every question counts!', 'Sharpen your skills!'];
    document.getElementById('welcome-sub').textContent = msgs[Math.floor(Math.random() * msgs.length)];

    generateChapterList();
    updateWallet();
    renderLeaderboard();
    renderCharts();
}

function showProfileOptions() {
    // Toggle profile view (just re-focuses home for now)
}

function logoutUser() {
    if (confirm('Log out? Your progress data will be saved.')) {
        if (auth) auth.signOut();
    }
}

// ============================================================
// ===== DIFFICULTY LEVELS =====
// ============================================================
let currentDifficulty = 'all';
let pendingChapter = '';

const DIFF_TIMES  = { easy: 150, medium: 120, hard: 90, all: 120 };
const DIFF_LABELS = { easy: '🟢 Easy', medium: '🟡 Medium', hard: '🔴 Hard', all: '🎯 All' };
const DIFF_CLASS  = { easy: 'easy', medium: 'medium', hard: 'hard', all: 'all' };

function openDifficultyModal(ch) {
    pendingChapter = ch;
    document.getElementById('modal-chapter-name').textContent = ch;
    document.getElementById('difficulty-modal').style.display = 'flex';
}

function closeDifficultyModal() {
    document.getElementById('difficulty-modal').style.display = 'none';
}

function selectDifficulty(diff) {
    currentDifficulty = diff;
    closeDifficultyModal();
    startTest(pendingChapter);
}

function getFilteredQuestions(ch) {
    const qs = chapters[ch];
    if (currentDifficulty === 'all') return qs;
    const idx = { easy: 0, medium: 1, hard: 2 };
    const filtered = qs.filter((_, i) => i % 3 === idx[currentDifficulty]);
    return filtered.length > 0 ? filtered : qs;
}

// ============================================================
// ===== SOUND EFFECTS =====
// ============================================================
let soundEnabled = true;
let musicEnabled = false;
let audioCtx    = null;
let musicNodes  = [];
let musicGainNode = null;

function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}

function playCorrectSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        [523.25, 659.25, 783.99].forEach((freq, i) => {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine'; osc.frequency.value = freq;
            const t = ctx.currentTime + i * 0.13;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.25, t + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
            osc.start(t); osc.stop(t + 0.38);
        });
    } catch(e) {}
}

function playWrongSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(280, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.45);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.45);
    } catch(e) {}
}

function playTickSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'square'; osc.frequency.value = 1200;
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.06);
    } catch(e) {}
}

function playVictorySound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, i) => {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.type = 'sine'; osc.frequency.value = freq;
            const t = ctx.currentTime + i * 0.17;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.28, t + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
            osc.start(t); osc.stop(t + 0.55);
        });
    } catch(e) {}
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('jee_sound', soundEnabled);
    updateSoundBtn();
    if (soundEnabled) playCorrectSound();
}

function updateSoundBtn() {
    const btn = document.getElementById('sound-btn');
    if (btn) btn.innerHTML = soundEnabled
        ? '<i class="fas fa-volume-up"></i>'
        : '<i class="fas fa-volume-mute"></i>';
}

function toggleMusic() {
    musicEnabled = !musicEnabled;
    const btn = document.getElementById('music-btn');
    if (musicEnabled) {
        startAmbientMusic();
        if (btn) btn.classList.add('active');
    } else {
        stopAmbientMusic();
        if (btn) btn.classList.remove('active');
    }
}

function startAmbientMusic() {
    try {
        const ctx = getAudioCtx();
        musicGainNode = ctx.createGain();
        musicGainNode.gain.value = 0.055;
        musicGainNode.connect(ctx.destination);

        // Soft pad: detuned sine oscillators
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const osc3 = ctx.createOscillator();
        osc1.type = 'sine'; osc1.frequency.value = 220;    // A3
        osc2.type = 'sine'; osc2.frequency.value = 329.63; // E4
        osc3.type = 'sine'; osc3.frequency.value = 440.01; // A4 (slightly detuned)

        // LFO tremolo
        const lfo     = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.25;
        lfoGain.gain.value  = 0.012;
        lfo.connect(lfoGain);
        lfoGain.connect(musicGainNode.gain);

        [osc1, osc2, osc3].forEach(o => o.connect(musicGainNode));
        [osc1, osc2, osc3, lfo].forEach(o => o.start());
        musicNodes = [osc1, osc2, osc3, lfo, lfoGain];
    } catch(e) {}
}

function stopAmbientMusic() {
    musicNodes.forEach(n => { try { if (n.stop) n.stop(); } catch(e) {} });
    musicNodes = [];
    if (musicGainNode) { try { musicGainNode.disconnect(); } catch(e) {} musicGainNode = null; }
}

// ============================================================
// ===== DARK MODE TOGGLE =====
// ============================================================
function toggleDark() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('jee_dark', isDark);
    const btn = document.getElementById('dark-btn');
    if (btn) btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// ============================================================
// ===== LEADERBOARD =====
// ============================================================
let leaderboard = [];

function renderLeaderboard() {
    const container = document.getElementById('leaderboard-list');
    if (!container) return;

    if (leaderboard.length === 0) {
        container.innerHTML = `
            <div class="text-center" style="padding:2rem;">
                <i class="fas fa-trophy fa-3x mb-2" style="color:var(--warning);opacity:0.5;"></i>
                <p style="color:var(--text-secondary);margin-top:1rem;">No scores yet. Complete a test to appear here!</p>
            </div>`;
        return;
    }

    const medals = ['🥇','🥈','🥉'];
    container.innerHTML = leaderboard.slice(0, 10).map((e, i) => `
        <div class="leaderboard-item rank-${i < 3 ? i+1 : 'other'}">
            <div class="lb-rank">${medals[i] || `#${i+1}`}</div>
            <div class="lb-avatar">${e.avatar || '🎓'}</div>
            <div class="lb-info">
                <strong>${escapeHtml(e.name || 'Student')}</strong>
                <span>${Number(e.testsCompleted || 0)} tests · ${getAccuracyText(e.totalCorrectAnswers, e.totalQuestionsAttempted)}</span>
            </div>
            <div class="lb-score">
                <strong style="color:var(--warning)">${Number(e.totalPoints || 0)} pts</strong>
                <span>${formatTimeSpent(Number(e.totalTimeSpent || 0))}</span>
            </div>
        </div>
    `).join('');
}

function getAccuracyText(correct, attempted) {
    if (!attempted) return '0% accuracy';
    return `${Math.round((Number(correct || 0) / Number(attempted || 1)) * 100)}% accuracy`;
}

function formatTimeSpent(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hrs > 0) return `${hrs}h ${mins}m`;
    return `${mins}m`;
}

// ============================================================
// ===== PERFORMANCE CHARTS =====
// ============================================================
let accuracyChartInst = null;
let chapterChartInst  = null;
let testHistory = [];

function recordAttemptLocally(attempt) {
    testHistory.push(attempt);
    if (testHistory.length > 100) testHistory = testHistory.slice(-100);
    chapterHistory = buildChapterHistoryFromAttempts(testHistory);
}

function renderCharts() {
    renderAccuracyChart();
    renderChapterChart();
}

function getChartCanvas(wrapperId, canvasId) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return null;

    let canvas = document.getElementById(canvasId);
    if (!canvas) {
        wrapper.innerHTML = `<canvas id="${canvasId}"></canvas>`;
        canvas = document.getElementById(canvasId);
    }

    return canvas;
}

function renderAccuracyChart() {
    const canvas = getChartCanvas('accuracy-chart-wrap', 'accuracyChart');
    if (!canvas) return;

    if (accuracyChartInst) { accuracyChartInst.destroy(); accuracyChartInst = null; }

    const recent = testHistory.slice(-10);
    if (recent.length === 0) {
        document.getElementById('accuracy-chart-wrap').innerHTML = `
            <div class="chart-empty">
                <i class="fas fa-chart-line fa-2x" style="opacity:0.3;"></i>
                <span>Complete tests to see your accuracy trend!</span>
            </div>`;
        return;
    }

    const isDark = document.body.classList.contains('dark');
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';

    accuracyChartInst = new Chart(canvas, {
        type: 'line',
        data: {
            labels: recent.map((t, i) => {
                const offset = testHistory.length - recent.length + i + 1;
                return `T${offset}`;
            }),
            datasets: [{
                label: 'Accuracy %',
                data: recent.map(t => t.accuracy),
                borderColor: '#4361ee',
                backgroundColor: 'rgba(67,97,238,0.12)',
                fill: true,
                tension: 0.45,
                pointBackgroundColor: recent.map(t =>
                    t.accuracy >= 80 ? '#4cc9f0' : t.accuracy >= 50 ? '#f9c74f' : '#f94144'
                ),
                pointRadius: 6, pointHoverRadius: 9,
                borderWidth: 2.5,
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => ` ${ctx.parsed.y}% — ${recent[ctx.dataIndex].chapter.substring(0,20)}`
                    }
                }
            },
            scales: {
                y: {
                    min: 0, max: 100,
                    ticks: { color: textColor, callback: v => v + '%' },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            }
        }
    });
}

function renderChapterChart() {
    const canvas = getChartCanvas('chapter-chart-wrap', 'chapterChart');
    if (!canvas) return;

    if (chapterChartInst) { chapterChartInst.destroy(); chapterChartInst = null; }

    // Best accuracy per chapter
    const best = {};
    testHistory.forEach(t => {
        if (!best[t.chapter] || t.accuracy > best[t.chapter]) best[t.chapter] = t.accuracy;
    });

    const labels = Object.keys(best);
    const data   = Object.values(best);

    if (labels.length === 0) {
        document.getElementById('chapter-chart-wrap').innerHTML = `
            <div class="chart-empty">
                <i class="fas fa-chart-bar fa-2x" style="opacity:0.3;"></i>
                <span>Complete tests to see chapter performance!</span>
            </div>`;
        return;
    }

    const isDark = document.body.classList.contains('dark');
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';

    chapterChartInst = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels.map(l => l.length > 14 ? l.substring(0,14)+'…' : l),
            datasets: [{
                label: 'Best Accuracy %',
                data,
                backgroundColor: data.map(v =>
                    v >= 80 ? 'rgba(76,201,240,0.75)' :
                    v >= 50 ? 'rgba(249,199,79,0.75)' :
                              'rgba(249,65,68,0.75)'
                ),
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    min: 0, max: 100,
                    ticks: { color: textColor, callback: v => v + '%' },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: textColor, maxRotation: 30 },
                    grid: { display: false }
                }
            }
        }
    });
}

// ============================================================
// ===== QUIZ STATE =====
// ============================================================
let totalPoints            = 0;
let testsCompleted         = 0;
let sessionPoints          = 0;
let totalTimeSpent         = 0;
let totalCorrectAnswers    = 0;
let totalQuestionsAttempted = 0;
let qList   = [];
let index   = 0;
let answers = [];
let marked  = [];
let time    = 120;
let timer;
let currentChapter  = '';
let optionSelected  = false;
let chapterHistory  = {};
let startTime;

// DOM references (assigned after DOM loads)
let home, quiz, result, chapterList, historyList;

// ============================================================
// ===== PARTICLES =====
// ============================================================
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 28; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 10 + 5;
        p.style.cssText = `
            width:${size}px; height:${size}px;
            left:${Math.random()*100}%; top:${Math.random()*100}%;
            animation-delay:${Math.random()*6}s;
            animation-duration:${Math.random()*4+4}s;
        `;
        container.appendChild(p);
    }
}

// ============================================================
// ===== CHAPTER LIST =====
// ============================================================
function generateChapterList() {
    chapterList = document.getElementById('chapter-list');
    historyList = document.getElementById('history-list');
    if (!chapterList) return;

    chapterList.innerHTML = '';
    let num = 1;

    Object.keys(chapters).forEach(ch => {
        const history      = chapterHistory[ch] || [];
        const attempts     = history.length;
        const totalQs      = chapters[ch].length;
        const bestScore    = attempts > 0 ? Math.max(...history.map(a => a.score)) : 0;

        chapterList.innerHTML += `
            <div class="card" onclick='openDifficultyModal("${escapeHtml(ch)}")'>
                <div class="chapter-number">${num++}</div>
                <h3 style="padding-top:0.5rem;">${ch}</h3>
                <div class="chapter-info">
                    <p style="color:var(--text-secondary)">${totalQs} questions available</p>
                    <div class="chapter-stats">
                        <div class="stat-item">
                            <span class="stat-value">${attempts}</span>
                            <span>Attempts</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${bestScore}/${totalQs}</span>
                            <span>Best Score</span>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    updateDashboard();
    updateHistory();
}

function updateDashboard() {
    const el = id => document.getElementById(id);
    if (el('tests-completed-display')) el('tests-completed-display').innerText = testsCompleted;
    if (el('total-points-display'))    el('total-points-display').innerText    = totalPoints;
    const acc = totalQuestionsAttempted > 0
        ? Math.round((totalCorrectAnswers / totalQuestionsAttempted) * 100)
        : 0;
    if (el('accuracy-display')) el('accuracy-display').innerText = `${acc}%`;
    const h = Math.floor(totalTimeSpent / 3600);
    const m = Math.floor((totalTimeSpent % 3600) / 60);
    if (el('time-spent-display')) el('time-spent-display').innerText = `${h}h ${m}m`;
}

function updateHistory() {
    historyList = document.getElementById('history-list');
    if (!historyList) return;

    if (testHistory.length === 0) {
        historyList.innerHTML = `
            <div class="text-center" style="padding:2rem;">
                <i class="fas fa-history fa-3x mb-2" style="color:var(--text-light);"></i>
                <p style="color:var(--text-secondary);margin-top:1rem;">No attempts yet. Start a test!</p>
            </div>`;
        return;
    }

    let html = '';
    [...testHistory].sort((a, b) => b.timestamp - a.timestamp).forEach((attempt) => {
        const date = new Date(attempt.timestamp).toLocaleDateString();
        const time = new Date(attempt.timestamp).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
        html += `
            <div class="leaderboard-item">
                <div>
                    <strong>${escapeHtml(attempt.chapter)}</strong>
                    <div style="font-size:0.85rem;color:rgba(255,255,255,0.6);">${date} at ${time}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-weight:700;color:var(--success);">${attempt.score}/${attempt.total}</div>
                    <div style="font-size:0.85rem;color:rgba(255,255,255,0.6);">${attempt.points} pts</div>
                </div>
            </div>`;
    });
    historyList.innerHTML = html;
}

// ============================================================
// ===== QUIZ ENGINE =====
// ============================================================
function startTest(ch) {
    home    = document.getElementById('home');
    quiz    = document.getElementById('quiz');
    result  = document.getElementById('result');

    testStartSnapshot = {
        totalPoints,
        totalCorrectAnswers,
        totalQuestionsAttempted
    };

    currentChapter = ch;
    qList          = getFilteredQuestions(ch);
    index          = 0;
    answers        = new Array(qList.length).fill(null);
    marked         = new Array(qList.length).fill(false);
    sessionPoints  = 0;
    optionSelected = false;
    time           = DIFF_TIMES[currentDifficulty];
    startTime      = Date.now();

    home.style.display   = 'none';
    quiz.style.display   = 'block';
    result.style.display = 'none';

    document.getElementById('chapter-title').innerText   = ch;
    document.getElementById('total-questions').innerText = qList.length;

    // Update difficulty badge
    const badge = document.getElementById('difficulty-badge');
    if (badge) {
        badge.textContent = DIFF_LABELS[currentDifficulty];
        badge.className   = `difficulty-badge ${DIFF_CLASS[currentDifficulty]}`;
    }

    buildNav();
    loadQ();
    startTimer();
    updateWallet();
}

function loadQ() {
    if (index >= qList.length) { submitTest(); return; }

    const q = qList[index];
    document.getElementById('qText').innerText    = `${index + 1}. ${q.q}`;
    document.getElementById('current-question').innerText = index + 1;

    const isLocked = optionSelected;
    let html = '';
    q.o.forEach((opt, i) => {
        const sel      = answers[index] === i;
        const disabled = isLocked ? 'disabled' : '';
        let cls = 'option';
        if (isLocked) {
            if (i === q.a) cls += ' correct';
            else if (sel)  cls += ' incorrect';
            else           cls += ' disabled';
        } else if (sel) { cls += ' selected'; }

        html += `<div class="${cls}" onclick="selectOption(${i})">
            <span style="font-weight:700">${String.fromCharCode(65+i)}.</span> ${opt}
        </div>`;
    });
    document.getElementById('options').innerHTML = html;

    highlightNav();
    updateButtonStates();
    updateMarkButton();
}

function selectOption(i) {
    if (optionSelected) return;

    answers[index] = i;
    optionSelected = true;
    const q = qList[index];

    // Animate selected option
    const opts = document.querySelectorAll('.option');
    if (opts[i]) opts[i].style.animation = 'bounceIn 0.5s ease';

    if (i === q.a) {
        playCorrectSound();
        showPointsNotification('+100 points! 🎉', 'points-added');
        totalPoints       += 100;
        sessionPoints     += 100;
        totalCorrectAnswers++;
        createConfetti();
    } else {
        playWrongSound();
        showPointsNotification('Points lost! Reset to 0 😢', 'points-lost');
        totalPoints   = 0;
        sessionPoints = 0;
    }

    totalQuestionsAttempted++;
    updateWallet();

    // Load next after delay
    setTimeout(() => {
        if (index < qList.length - 1) {
            index++;
            optionSelected = false;
            time = DIFF_TIMES[currentDifficulty];
            loadQ();
            startTimer();
        } else {
            submitTest();
        }
    }, 2000);
}

function createConfetti() {
    for (let i = 0; i < 20; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.background = ['var(--success)','var(--primary)','var(--warning)','var(--info)'][Math.floor(Math.random()*4)];
        c.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 2000);
    }
}

function showPointsNotification(message, type) {
    const n = document.createElement('div');
    n.className = `points-notification ${type}`;
    n.innerHTML = `<i class="fas ${type === 'points-added' ? 'fa-check-circle' : 'fa-times-circle'}"></i> ${message}`;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 2600);
}

function updateWallet() {
    const el = document.getElementById('points');
    if (el) el.innerText = totalPoints;
}

function restorePreTestState() {
    if (!testStartSnapshot) return;
    totalPoints = testStartSnapshot.totalPoints;
    totalCorrectAnswers = testStartSnapshot.totalCorrectAnswers;
    totalQuestionsAttempted = testStartSnapshot.totalQuestionsAttempted;
    updateWallet();
    updateDashboard();
    testStartSnapshot = null;
}

function nextQ() {
    if (index < qList.length - 1) {
        index++;
        optionSelected = false;
        time = DIFF_TIMES[currentDifficulty];
        loadQ(); startTimer();
    }
}

function prevQ() {
    if (index > 0) {
        index--;
        optionSelected = false;
        time = DIFF_TIMES[currentDifficulty];
        loadQ(); startTimer();
    }
}

function updateButtonStates() {
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === qList.length - 1;
}

function markQuestion() {
    marked[index] = !marked[index];
    updateMarkButton();
    highlightNav();
    const btn = document.getElementById('mark-btn');
    if (btn) { btn.style.animation = 'bounceIn 0.4s ease'; setTimeout(() => btn.style.animation='', 400); }
}

function updateMarkButton() {
    const btn = document.getElementById('mark-btn');
    if (btn) btn.innerHTML = marked[index]
        ? '<i class="fas fa-bookmark"></i> Unmark Question'
        : '<i class="fas fa-bookmark"></i> Mark for Review';
}

function buildNav() {
    let html = '';
    for (let i = 0; i < qList.length; i++) {
        let cls = 'nav-btn';
        if (i === index)    cls += ' current';
        if (answers[i] !== null) cls += ' answered';
        if (marked[i])      cls += ' marked';
        html += `<button class="${cls}" onclick="goToQuestion(${i})">${i+1}</button>`;
    }
    document.getElementById('nav').innerHTML = html;
}

function goToQuestion(i) {
    if (optionSelected) return;
    index = i;
    time = DIFF_TIMES[currentDifficulty];
    loadQ(); startTimer();
}

function highlightNav() { buildNav(); }

function startTimer() {
    clearInterval(timer);
    updateTimerDisplay();
    timer = setInterval(() => {
        time--;
        updateTimerDisplay();
        updateProgress();
        if (time <= 10) playTickSound();
        if (time <= 0) {
            clearInterval(timer);
            if (index < qList.length - 1) {
                index++;
                optionSelected = false;
                time = DIFF_TIMES[currentDifficulty];
                loadQ(); startTimer();
            } else { submitTest(); }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    const el = document.getElementById('timer');
    if (!el) return;
    el.innerHTML = `<i class="fas fa-clock"></i> ${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
    el.className = 'timer' + (time <= 10 ? ' danger' : time <= 30 ? ' warning' : '');
}

function updateProgress() {
    const max = DIFF_TIMES[currentDifficulty];
    const el  = document.getElementById('progress');
    if (el) el.style.width = `${((max - time) / max) * 100}%`;
}

async function persistAttemptToCloud(attempt) {
    if (!currentUser || !db) return;

    const userRef = db.collection('users').doc(currentUser.uid);

    await Promise.all([
        userRef.collection('attempts').add(attempt),
        userRef.set({
            name: currentUser.name,
            avatar: currentUser.avatar,
            totalPoints,
            testsCompleted,
            totalTimeSpent,
            totalCorrectAnswers,
            totalQuestionsAttempted,
            lastPlayedAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true })
    ]);

    await refreshLeaderboardFromCloud();
}

async function submitTest() {
    if (isSubmittingTest) return;
    isSubmittingTest = true;
    clearInterval(timer);
    playVictorySound();

    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    totalTimeSpent += timeSpent;

    let score = 0;
    qList.forEach((q, i) => { if (answers[i] === q.a) score++; });
    testsCompleted++;

    const accuracy = Math.round((score / qList.length) * 100);
    const attempt = {
        chapter: currentChapter,
        difficulty: currentDifficulty,
        score,
        total: qList.length,
        accuracy,
        points: sessionPoints,
        timestamp: Date.now(),
        timeSpent
    };

    recordAttemptLocally(attempt);
    testStartSnapshot = null;

    // Show result screen
    quiz   = document.getElementById('quiz');
    result = document.getElementById('result');
    quiz.style.display   = 'none';
    result.style.display = 'block';

    document.getElementById('score-display').innerHTML = `
        <h3>Chapter: ${currentChapter}</h3>
        <h3 style="color:var(--text-secondary);font-size:1rem;">${DIFF_LABELS[currentDifficulty]}</h3>
        <div class="score-display">${score}/${qList.length}</div>
        <div style="font-size:1.1rem;color:var(--text-secondary);">
            Accuracy: ${accuracy}% &nbsp;|&nbsp; Time: ${Math.floor(timeSpent/60)}m ${timeSpent%60}s
        </div>
        <h3 style="color:var(--success);margin-top:1rem;">Points Earned: ${sessionPoints}</h3>
    `;

    document.getElementById('total-points').innerText   = totalPoints;
    document.getElementById('tests-completed').innerText = testsCompleted;
    document.getElementById('average-score').innerText  = `${accuracy}%`;

    // Review section
    let reviewHTML = '<h3>📝 Question Review</h3>';
    qList.forEach((q, i) => {
        const correct    = answers[i] === q.a;
        const userAns    = answers[i] !== null ? q.o[answers[i]] : 'Not attempted';
        const correctAns = q.o[q.a];
        let cls = 'review-item' + (correct ? ' correct' : answers[i] === null ? ' unattempted' : ' incorrect');
        reviewHTML += `
            <div class="${cls}">
                <p><strong>Q${i+1}:</strong> ${q.q}</p>
                <p>Your answer: <strong>${userAns}</strong></p>
                <p>Correct answer: <strong style="color:var(--success)">${correctAns}</strong></p>
                <div class="solution"><strong>Solution:</strong><br>${q.s}</div>
                ${marked[i] ? '<p style="color:var(--warning);margin-top:0.5rem;"><i class="fas fa-bookmark"></i> Marked for review</p>' : ''}
            </div>`;
    });
    document.getElementById('review-section').innerHTML = reviewHTML;

    updateWallet();
    updateDashboard();

    try {
        await persistAttemptToCloud(attempt);
    } catch (error) {
        console.error('Failed to sync test result to Firestore:', error);
        showPointsNotification('Cloud sync failed. Check Firebase setup.', 'points-lost');
    } finally {
        isSubmittingTest = false;
    }
}

function goHomeEarly() {
    if (confirm('Return to home? This unfinished test will not be saved.')) {
        clearInterval(timer);
        restorePreTestState();
        goHome();
    }
}

function goHome() {
    home   = document.getElementById('home');
    quiz   = document.getElementById('quiz');
    result = document.getElementById('result');
    home.style.display   = 'block';
    quiz.style.display   = 'none';
    result.style.display = 'none';
    generateChapterList();
    updateWallet();
    renderLeaderboard();
    renderCharts();
}

// ============================================================
// ===== UTILITIES =====
// ============================================================
function escapeHtml(str) {
    return String(str)
        .replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/"/g,'&quot;');
}

function id(s) { return document.getElementById(s); }

// ============================================================
// ===== INIT =====
// ============================================================
window.onload = initApp;
