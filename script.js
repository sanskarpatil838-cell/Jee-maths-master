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
    {q: "If 3/(2+ cos θ+i sin θ) = a+ib, then [(a-2)²+b²] is", 
     o: ["0", "1", "-1", "2"], 
     a: 1,
     s: "Given 3/(2+ cos θ+ i sin θ) = a+ib\n3 ((2+ cos θ) – i sin θ)/(2+ cos θ + i sin θ)((2+cos θ)- i sin θ)\n= ((6+ 3 cos θ) – i 3 sin θ)/((2+cos θ)²+ sin² θ)\n= ((6+ 3 cos θ) – i(3 sin θ))/(5+4 cos θ)\nComparing with a+ib, we get\na = (6+ 3 sin θ)/(5+ 4 cos θ)\nb = -3 sin θ/(5+ 4极 θ)\n(a-2)²+b² = [(6+ 3 sin θ)/(5+ 4 cos θ)]-2)²+(-3 sin θ/(5+ 4 cos θ))²\n= (-4-5 cos θ)²+9 sin²θ)/(5+ 4 cos θ)²\n= ((4+5 cos θ)²+9 sin²θ)/(5+ 4 cos θ)²\n= (16 + 40 cos θ +25 cos²θ+ 9 sin²θ)/(5 +4 cos θ)²\n= (16 + 40 cos θ+ 16 cos²θ+ 9 (sin²θ +cos²θ))/(5+ 4 cos θ)²\n= (16 + 40 cos θ+ 16 cos²θ+ 9)/(5 +4 cos θ)²\n= (16 cos²θ+ 40 cos θ+25)/(5+4 cos θ)²\n= (4 cos θ+5)²/(5+4 cos θ)²\n= 1"},
     
    {q: "If z = x + iy is a complex number where x and y are integers. Then, the area of the rectangle whose vertices are the roots of the equation z\bar{z}^3 + \bar{z}z^3 = 350", 
     o: ["48", "32", "40", "80"], 
     a: 0,
     s: "Given z\bar{z}^3 + \bar{z}z^3 = 350\nTake z = x+iy\n(x+iy)(x-iy)[(x-iy)²+(x+iy)²] = 350\n(x²+y²)(2x²-2y²) = 350\n(x²+y²)(x²-y²) = 175 = (25)×7\nx²+y² = 25 (i)\nx²-y² = 7 (ii)\nAdding (i) and (ii), we get\n2x² = 32\nx = ±4\nAnd y = ±3\nHence the vertices of the triangle are (4,3), (4, -3), (-4, -3) and (-4,3).\nArea of rectangle = length × breadth = 8×6 = 48"},
     
    {q: "If 1, a₁, a₂,…aₙ₋₁ are the nth roots of unity, then the value of (1-a₁) (1 – a₂)(1 – a₃)…(1 – aₙ₋₁) is", 
     o: ["√3", "1/2", "n", "0"], 
     a: 2,
     s: "Given 1, a₁, a₂,…aₙ₋₁ are the nth roots of unity.\nSo xⁿ-1 = (x-1)(x-a₁)…(x-aₙ₋₁)\n( xⁿ-1) /(x-1) = (x-a₁)(x-a₂)…(x-aₙ₋₁)\nxⁿ⁻¹+xⁿ⁻²+…x²+x+1 = (x-a₁)(x-a₂)…(x-aₙ₋₁)\nSubstitute x = 1\n(1-a₁)(1-a₂)…(1-aₙ₋₁) = 1+1+1+…n times = n"},
     
    {q: "If |(z+i)/(z-i)| = √3, then radius of the circle is", 
     o: ["2/√21", "1/√21", "√3", "√21"], 
     a: 2,
     s: "Take z = x+iy\n|z| = √(x²+y²)\nGiven |(z+i)/(z-i)| = √3\n|(z+i) | = √3|(z-i)|\nPut z = x+iy\n|(x+(y+1)i) | = √3|(x+(y-1)i)|\nSquaring we get\nx²+ (y+1)² = 3(x²+(y-1)²)\nx²+ y² +2y + 1 = 3x²+ 3y²– 6y +3\n2x²+ 2y²– 8y + 2 = 0\nx²+ y²– 4极 + 1 = 0\nEquation of circle is (x-h)² + (y-k)² = r²\nWhere (h, k) is the centre and radius is r.\n(x-0)² + (y-2)² = √3²\nRadius is √3."},
     
    {q: "If α and β ∈ C are the distinct roots of the equation x²– x + 1 = 0, then α¹⁰¹+ β¹⁰⁷ is equal to:", 
     o: ["1", "2", "-1", "0"], 
     a: 0,
     s: "x²– x +1 = 0\nSolve by using quadratic formula, we get\nx = (1±i√3)/2 = (1+i√3)/2 , (1-i√3)/2 = -(-1-i√3)/2, -(-1+i√3)/2 = -ω², -ω\nα= -ω²\nβ = -ω\nα¹⁰¹+ β¹⁰⁷ = (-ω²)¹⁰¹ + (-ω)¹⁰⁷ = -(ω²⁰²+ ω¹⁰⁷) = -[(ω³)⁶⁷ ω+ (ω³)³⁵ ω²] = -[ω +ω²] = 1"},
     
    {q: "The region represented by {z = x+iy ∈ C : z -Re(z) ≤1} is also given by the inequality:", 
     o: ["y² ≤ 2(x + 1/2)", "y² ≤ x + (1/2)", "y² ≥ 2(x + 1)", "y² ≥ (x + 1)"], 
     a: 0,
     s: "{z = x + iy ∈ C : z -Re(z) ≤ 1}\n|z| = √(x²+y²)\nRe(z) = x\nz- Re(z) ≤1\n=>√(x²+y²)-x≤ 1\n=> √(x²+y²)≤ 1+x\n=>(x²+y²)≤ (1+x²+2x)\n=> y² ≤ 2(x + 1/2)"},
     
    {q: "If ((1+i)/(1-i))ᵐ/² = ((1+i)/(i-1))ⁿ/³ = 1, (m, n∈N) then the greatest common divisor of the least values of m and n is", 
     o: ["1", "2", "3", "4"], 
     a: 3,
     s: "[(1+i)(1+i)/(1+i)(1-i)]ᵐ/² = [(1+i)(-1-i)/(-1+i)(-1-i)]ⁿ/³ = 1\nSolving LHS: (2i/2)ᵐ/² = 1 => m = 8\nSolving RHS: [(-1-i-i+1)/(1+1)]ⁿ/³ = 1\n(-2i/2)ⁿ/³ = 1\n(-i)ⁿ/³ = 1 => n = 12\nGreatest common divisor of m and n is 4."},
     
    {q: "If z is any complex number satisfying |z – 3 – 2i | ≤ 2, then the minimum value of |2z – 6 + 5i| is", 
     o: ["2", "1", "3", "5"], 
     a: 3,
     s: "|z – 3 – 2i | ≤ 2\n|2z – 6 + 5i| = 2|z – 3 + (5/2)i|\n|z – 3 + (5/2)i| = |z – 3 -2i+2i+(5/2)i| = |(z – 3 -2i)+(9/2)i|\n≥ ||z – 3 -2i)|-(9/2)| ≥ |2-9/2|≥ 5/2\n=> |z – 3 + (5/2)i|≥ 5/2\n=> |2z – 6+ 5i|≥ 5"},
     
    {q: "If z is a complex number such that the imaginary part of z is non-zero and a = z² + z + 1 is real. Then, a cannot take the value", 
     o: ["-1", "1/3", "1/2", "3/4"], 
     a: 3,
     s: "Given a = z²+z+1\nz²+z+1−a = 0\nIf solution is not real then b²-4ac<0.\n1 – 4(1-a) <0\n1 – 4 + 4a <0\n-3 + 4a <0\n4a <3\na< 3/4\nValues of a less than 3/4 will give non real solutions."},
     
    {q: "Let a, b, x and y be real numbers such that a-b = 1 and y ≠ 0. If the complex number z = x + iy satisfies Im((az +b)/(z+1)) = y, then which of the following is(are) possible value(s) of x?", 
     o: ["-1 + √(1 – y²)", "-1 – √(1 – y²)", "1 + √(1 + y²)", "1 – √(1 + y²)"], 
     a: 0,
     s: "a – b = 1\ny ≠ 0\nIm[(az +b)/(z+1)] = y\nLet z = x+iy\n=> Im [(a(x + iy) + b)/(x + iy + 1)][((x + 1) – iy)/((x + 1) – iy)] = y\n=> [-(ax + b)y + ay(x+1)]/(x+1)² + y² = y\n=> (-axy – by + axy + ay)/(x+1)² + y² = y\n=> a – b = (x+1)² + y²\n=> 1 = (x+1)² + y²\nSo x = -1 ±√(1-y²)"}
 ],
   "Permutations and Combinations": [
    {q: "There are 3 sections in a question paper and each section contains 5 questions. A candidate has to answer a total of 5 questions, choosing at least one question from each section. Then the number of ways, in which the candidate can choose the questions, is:", 
     o: ["2250", "2255", "1500", "3000"], 
     a: 0,
     s: "Total number of sections = 3\nNumber of questions in each section = 5\nNumber of ways = 3(5C1×5C2×5C2) + 3(5C1 ×5C1×5C3)\n= 3(5×5×2×5×2) + 3(5×5×10)\n= 750 + 1500\n= 2250"},
     
    {q: "A test consists of 6 multiple choice questions, each having 4 alternative answers of which only one is correct. The number of ways, in which a candidate answers all six questions such that exactly four of the answers are correct, is", 
     o: ["120", "135", "150", "180"], 
     a: 1,
     s: "Number of multiple choice questions = 6\nNumber of alternative answers = 4\nNumber of ways = 6C4×1×3²\n= 15×9\n= 135"},
     
    {q: "Total number of six-digit numbers in which only and all the five digits 1, 3, 5, 7, and 9 appear, is", 
     o: ["56", "(½)(6!)", "6!", "(5/2) 6!"], 
     a: 3,
     s: "Selecting all 5 digits = 5C5 = 1 way\nWe need to select one more digit to make it a 6 digit number = 5C1 = 5 ways\nTotal number of permutations = 6!/2!\nTotal numbers = 5C5×5C1×(6!/2!) = (5/2) 6!"},
     
    {q: "The total number of ways in which 5 balls of different colours can be distributed among 3 persons so that each person gets at least one ball is", 
     o: ["75", "150", "210", "243"], 
     a: 1,
     s: "n = 5, r = 3\nNumber of ways = rⁿ – rC1(r-1)ⁿ + rC2(r-2)ⁿ – rC3(r-3)ⁿ\n= 3⁵ – 3C1(2)⁵ + 3C2(1)⁵ – 3C3(0)⁵\n= 243 – 96 + 3\n= 150"},
     
    {q: "Let S = {1, 2, 3, 4}. The total number of unordered pairs of disjoint subsets of S is equal to", 
     o: ["25", "34", "42", "41"], 
     a: 3,
     s: "S = {1, 2, 3, 4}\nEvery element of S can be an element of A or of B or of neither of the subsets.\nThere exist 3 possibilities for each element.\nTotal number of ordered pairs of subsets = 3⁴+1 = 81+1 = 82\nTotal number of unordered pairs = 82/2 = 41"},
     
    {q: "Six cards and six envelopes are numbered 1, 2, 3, 4, 5, 6, and cards are to be placed in envelopes so that each envelope contains exactly one card and no card is placed in the envelope bearing the same number and moreover the card numbered 1 is always placed in envelope numbered 2. Then the number of ways it can be done is", 
     o: ["264", "265", "53", "67"], 
     a: 2,
     s: "If card number '2' goes in envelope '1': derangement of 4 things = 4!(1/2! – 1/3! + 1/4!) = 9 ways\nIf card number '2' doesn't go in envelope '1': derangement of 5 things = 5!(1/2! – 1/3! – 1/4! + 1/5!) = 44 ways\nTotal ways = 9+44 = 53"},
     
    {q: "A debate club consists of 6 girls and 4 boys. A team of 4 members is said to be selected from this club including the selection of a captain (from among these 4 members) for the team. If the team has to be included at most one boy, then the number of ways of selecting the team is", 
     o: ["380", "320", "260", "95"], 
     a: 0,
     s: "Case 1: all 4 girls = 6C4 = 15 ways\nCase 2: 3 girls + 1 boy = 6C3 × 4C1 = 80 ways\nTotal ways to select team = 15+80 = 95\nWays to select captain = 4C1 = 4\nTotal ways = 95 × 4 = 380"},
     
    {q: "The number of 5 digit numbers which are divisible by 4, with the digits from the set {1, 2, 3, 4, 5} and the repetition of digit is allowed is", 
     o: ["625", "600", "500", "6250"], 
     a: 0,
     s: "A number is divisible by 4 if last two digits are divisible by 4\nValid endings: 12, 24, 32, 44, 52\nFirst 3 digits can be arranged in 5³ ways\nTotal numbers = 5³ × 5 = 625"},
     
    {q: "A bag contains 2 apples, 3 oranges, and 4 bananas. The number of ways in which 3 fruits can be selected if atleast one banana is always in the combination (Assume fruits of same species to be alike) is", 
     o: ["6", "10", "29", "7"], 
     a: 0,
     s: "Case 1: 2 bananas + 1 other = 1 way\nCase 2: 1 banana + 2 same fruits = 2C1 = 2 ways\nCase 3: 1 banana + 2 different fruits = 1 way\nCase 4: 3 bananas = 1 way\nTotal ways = 1 + 2 + 1 + 2 = 6"},
     
    {q: "Team A consists of 7 boys and n girls and Team B has 4 boys and 6 girls. If a total of 52 single matches can be arranged between these two teams when a boy plays against a boy and a girl plays against a girl, then n is equal to", 
     o: ["5", "6", "2", "4"], 
     a: 3,
     s: "Boy matches = 7C1 × 4C1 = 28\nGirl matches = nC1 × 6C1 = 6n\nTotal matches = 28 + 6n = 52\n6n = 24\nn = 4"}
],
   "Binomial Theorem": [
    {q: "Coefficient of x¹¹ in the expansion (1 + x²)⁴ (1 + x³)⁷ (1 + x⁴)¹² is", 
     o: ["1051", "1106", "1113", "1120"], 
     a: 2,
     s: "(1 + x²)⁴ (1 + x³)⁷ (1 + x⁴)¹²\nFind 2m + 3n + 4p = 11\nPossibilities: m=0,n=1,p=2; m=1,n=3,p=0; m=2,n=1,p=1; m=4,n=1,p=0\nCoefficient = ⁴C₀×⁷C₁×¹²C₂ + ⁴C₁×⁷C₃×¹²C₀ + ⁴C₂×⁷C₁×¹²C₁ + ⁴C₄×⁷C₁×¹²C₀\n= 462 + 140 + 504 + 7 = 1113"},
     
    {q: "The coefficients of three consecutive terms of (1+x)ⁿ⁺⁵ are in the ratio 5: 10: 14. Then n =", 
     o: ["4", "5", "6", "7"], 
     a: 2,
     s: "ⁿ⁺⁵Cᵣ₋₁ : ⁿ⁺⁵Cᵣ : ⁿ⁺⁵Cᵣ₊₁ = 5: 10: 14\nⁿ⁺⁵Cᵣ/ⁿ⁺⁵Cᵣ₋₁ = 10/5 ⇒ (n+6-r)/r = 2 ⇒ n = 3r-6\nⁿ⁺⁵Cᵣ₊₁/ⁿ⁺⁵Cᵣ = 14/10 ⇒ (n+5-r)/(r+1) = 7/5\nSolving: 5(3r-6) - 12r + 18 = 0 ⇒ 3r - 12 = 0 ⇒ r=4\nn = 3(4)-6 = 6"},
     
    {q: "The coefficient of x⁹ in the expansion (1+x)(1+x²)(1+x³) ..(1+x¹⁰⁰) is", 
     o: ["6", "7", "8", "9"], 
     a: 2,
     s: "To get power 9, possibilities: (0,9), (1,8), (2,7), (3,6), (4,5) = 5 ways\n(1,2,6), (1,3,5), (2,3,4) = 3 ways\nTotal coefficient = 8"},
     
    {q: "If {p} denotes the fractional part of the number p, then {3²⁰⁰/8}, is equal to", 
     o: ["5/8", "7/8", "3/8", "1/8"], 
     a: 3,
     s: "3²⁰⁰/8 = (1/8)9¹⁰⁰ = 1/8 (1 + 8)¹⁰⁰ = 1/8 + integer\n{1/8 + integer} = 1/8"},
     
    {q: "The coefficient of x⁷ in the expression (1 + x)¹⁰ + x(1 + x)⁹ + x²(1 + x)⁸ + ⋯ + x¹⁰ is", 
     o: ["420", "330", "210", "120"], 
     a: 1,
     s: "S = (1+x)¹⁰ + x(1+x)⁹ + x²(1+x)⁸ + ⋯ + x¹⁰\nS = (1+x)¹¹ - x¹¹\nCoefficient of x⁷ is ¹¹C₇ = 330"},
     
    {q: "The coefficient of x⁴ in the expansion of (1+x+x²)¹⁰ is", 
     o: ["615", "620", "625", "630"], 
     a: 0,
     s: "General term: (10!/p!q!r!)x^{q+2r} where q+2r=4\np=6,q=4,r=0: 10!/(6!4!) = 210\np=7,q=2,r=1: 10!/(7!2!1!) = 360\np=8,q=0,r=2: 10!/(8!2!) = 45\nSum = 210+360+45 = 615"},
     
    {q: "If Cᵣ = ²⁵Cᵣ and C₀+5⋅C₁+9⋅C₂ +⋯+101. C₂₅ =2²⁵.k then k is equal to", 
     o: ["50", "51", "52", "53"], 
     a: 1,
     s: "S = ²⁵C₀ + 5⋅²⁵C₁ + 9⋅²⁵C₂ + ⋯ + 101⋅²⁵C₂₅\nReverse and add: 2S = 102[²⁵C₀+²⁵C₁+⋯+²⁵C₂₅] = 102⋅2²⁵\nS = 51⋅2²⁵ ⇒ k = 51"},
     
    {q: "If the fractional part of the number 2⁴⁰³/15 is k/15, then k is equal to", 
     o: ["4", "8", "6", "14"], 
     a: 1,
     s: "2⁴⁰³ = 2⁴⁰⁰ × 2³ = (2⁴)¹⁰⁰ × 8 = 8×16¹⁰⁰ = 8(1+15)¹⁰⁰\n2⁴⁰³/15 = 8(1+15x)/15 = 8x + 8/15\nFractional part = 8/15 ⇒ k = 8"},
     
    {q: "The number of terms in the expansion of the (1+x)¹⁰¹(1+x² -x)¹⁰⁰ in powers of x is", 
     o: ["302", "301", "202", "101"], 
     a: 2,
     s: "(1+x)¹⁰¹(1+x²-x)¹⁰⁰ = (1+x)(1+x)¹⁰⁰(1-x+x²)¹⁰⁰\n= (1+x)[(1+x)(1-x+x²)]¹⁰⁰ = (1+x)(1+x³)¹⁰⁰\n(1+x³)¹⁰⁰ has 101 terms\n(1+x)(1+x³)¹⁰⁰ has 2×101 = 202 terms"},
     
    {q: "The sum of the rational terms in the binomial expansion of (2¹/² + 3¹/⁵)¹⁰ is", 
     o: ["25", "32", "9", "41"], 
     a: 3,
     s: "(2¹/² + 3¹/⁵)¹⁰ = ¹⁰C₀(2¹/²)¹⁰ + ¹⁰C₁(2¹/²)⁹(3¹/⁵) + ... + ¹⁰C₁₀(3¹/⁵)¹⁰\nRational terms: first term = 2⁵ = 32, last term = 3² = 9\nSum = 32 + 9 = 41"}
],
    "Sequences and Series": [
    {q: "Let a₁, a₂, a₃,…be in harmonic progression with a₁ = 5 and a₂₀ = 25. The least positive integer n for which aₙ < 0 is", 
     o: ["22", "23", "24", "25"], 
     a: 3,
     s: "Given a₁, a₂, a₃,…are in HP ⇒ 1/a₁, 1/a₂, 1/a₃ are in AP\n1/a₂₀ = 1/a₁ + 19d ⇒ 1/25 - 1/5 = 19d ⇒ d = -4/(25×19)\n1/aₙ = 1/5 + (n-1)(-4/(25×19)) < 0\nSolving: n > 19×5/4 + 1 ⇒ n > 25 ⇒ n = 25"},
     
    {q: "Let a, b, and c be positive integers such that b/a is an integer. If a, b, c are in geometric progression and the arithmetic mean of a, b, c is b + 2, then the value of (a² + a - 14)/(a + 1) is", 
     o: ["2", "3", "4", "5"], 
     a: 2,
     s: "Let a, b, c = a, ar, ar²\n(a + ar + ar²)/3 = ar + 2 ⇒ ar² - 2ar + a = 6 ⇒ a(r-1)² = 6\n(r-1)² = 6/a ⇒ a = 6\n(a² + a - 14)/(a+1) = (36 + 6 - 14)/7 = 28/7 = 4"},
     
    {q: "A pack contains n cards numbered from 1 to n. Two consecutive numbered cards are removed from the pack and the sum of the numbers on the remaining cards is 1224. If the smaller to the numbers on the removed card is k, then k-20 equals", 
     o: ["5", "10", "15", "50"], 
     a: 0,
     s: "Sum of n natural numbers = n(n+1)/2\nn(n+1)/2 - (k + k+1) = 1224 ⇒ n² + n - 2450 = 4k\nk = (n+50)(n-49)/4\n1 ≤ k ≤ n-1 ⇒ 49 < n < 51 ⇒ n=50\nk = 100/4 = 25 ⇒ k-20 = 5"},
     
    {q: "The sides of the right-angled triangle are in AP. If the triangle has an area 24, then what is the length of its smallest side?", 
     o: ["4", "5", "6", "7"], 
     a: 2,
     s: "Let sides = a-d, a, a+d\n(a+d)² = a² + (a-d)² ⇒ a² + 2ad + d² = a² + a² - 2ad + d²\n4ad = a² ⇒ a = 4d\nArea = ½(a-d)a = 24 ⇒ ½(3d)(4d) = 24 ⇒ 6d² = 24 ⇒ d=2\nSmallest side = a-d = 4d-d = 3d = 6"},
     
    {q: "If the sum of the first n terms of an AP is cn², then the sum of squares of these n terms is", 
     o: ["n(4n² - 1)c²/6", "n(4n² + 1)c²/3", "n(4n² - 1)c²/3", "n(4n² + 1)c²/6"], 
     a: 2,
     s: "Sₙ = cn²\nTₙ = Sₙ - Sₙ₋₁ = cn² - c(n-1)² = c(2n-1)\n∑Tₙ² = c²∑(4n² - 4n + 1) = c²[4∑n² - 4∑n + ∑1]\n= c²[4n(n+1)(2n+1)/6 - 4n(n+1)/2 + n]\n= nc²(4n² - 1)/3"},
     
    {q: "The third term of a geometric progression is 4. The product of the first five terms is", 
     o: ["4³", "4⁴", "4⁵", "4"], 
     a: 2,
     s: "Let GP: a, ar, ar², ar³, ar⁴\nThird term = ar² = 4\nProduct = a×ar×ar²×ar³×ar⁴ = a⁵r¹⁰ = (ar²)⁵ = 4⁵"},
     
    {q: "Let X be the set consisting of the first 2018 terms of an arithmetic progression, 1, 6, 11…., and Y be the set consisting of the first 2018 terms of arithmetic progression 9, 16, 23, …. Then, the number of elements in the set (X ⋃ Y) is", 
     o: ["3748", "3750", "3752", "3754"], 
     a: 0,
     s: "X: AP with a=1, d=5 ⇒ 2018th term = 1+2017×5 = 10086\nY: AP with a=9, d=7 ⇒ 2018th term = 9+2017×7 = 14128\nX∩Y: common terms form AP with a=16, d=35\n10086 ≥ 16 + (n-1)35 ⇒ n ≤ 288.71 ⇒ n=288\nX∪Y = 2018 + 2018 - 288 = 3748"},
     
    {q: "The minimum value of the sum of real numbers a⁻⁵, a⁻⁴, 3a⁻³, 1, a⁸ and a¹⁰ with a > 0 is", 
     o: ["9", "8", "2", "1"], 
     a: 1,
     s: "Using AM ≥ GM:\n(a⁻⁵ + a⁻⁴ + a⁻³ + a⁻³ + a⁻³ + 1 + a⁸ + a¹⁰)/8 ≥ [a⁻⁵×a⁻⁴×a⁻³×a⁻³×a⁻³×1×a⁸×a¹⁰]¹/⁸\n(a⁻⁵ + a⁻⁴ + 3a⁻³ + 1 + a⁸ + a¹⁰)/8 ≥ 1\nSum ≥ 8"},
     
    {q: "Let Sₙ = ∑ₖ₌₁⁴ⁿ (-1)ᵏ⁽ᵏ⁺¹⁾/² k². Then Sₙ can take values", 
     o: ["1056", "1088", "1120", "1332"], 
     a: 0,
     s: "Sₙ = -1² - 2² + 3² + 4² - 5² - 6² + 7² + 8² - ... + (4n)²\n= (-1² + 3² - 5² + 7² -...+ (4n-1)²) + (-2² + 4² - 6² + 8² -...+ (4n)²)\n= 2(4 + 12 + 20+...(8n-4)) + 2(6 + 14 + 22+...(8n-2))\n= n(8n) + n(8n+4) = n(16n+4)\nFor n=8: Sₙ=1056; For n=9: Sₙ=1332"},
     
    {q: "If m arithmetic means (A.Ms) and three geometric means (G.Ms) are inserted between 3 and 243 such that 4th A.M is equal to 2nd G.M, then m is equal to", 
     o: ["39", "40", "41", "42"], 
     a: 0,
     s: "AP: 3, a₁, a₂,...aₘ, 243 ⇒ d = 240/(m+1)\nGP: 3, G₁, G₂, G₃, 243 ⇒ r⁴ = 243/3 = 81 ⇒ r=3\n4th A.M = 2nd G.M ⇒ a₄ = G₂\n3 + 4d = 3r² ⇒ 3 + 4×240/(m+1) = 27\n4×240/(m+1) = 24 ⇒ m+1 = 40 ⇒ m=39"}
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
    {q: "The positive integer value of n>3 satisfying the equation 1/sin(π/n) = 1/sin(2π/n) + 1/sin(3π/n)", 
     o: ["8", "6", "5", "7"], 
     a: 3,
     s: "1/sin(π/n) - 1/sin(3π/n) = 1/sin(2π/n)\n[sin3π/n - sinπ/n]/(sin3π/n sinπ/n) = 1/sin2π/n\n2cos(2π/n)sin(π/n)/(sin3π/n sinπ/n) sin2π/n = 1\n2sin2π/n cos2π/n/sin3π/n = 1\nsin4π/n/sin3π/n = 1\nsin4π/n = sin3π/n\nπ - 4π/n = 3π/n ⇒ π = 7π/n ⇒ n = 7"},
     
    {q: "If A + B + C = 180° then the value of tan A + tan B + tan C is", 
     o: ["≥3√3", "≥2√3", "> 3√3", "> 2√3"], 
     a: 0,
     s: "A + B + C = 180° ⇒ tan(A+B) = -tanC\n(tanA+tanB)/(1-tanAtanB) = -tanC\ntanA+tanB+tanC = tanAtanBtanC\nUsing AM ≥ GM: (tanA+tanB+tanC)/3 ≥ (tanAtanBtanC)^{1/3}\ntanAtanBtanC ≥ 3(tanAtanBtanC)^{1/3}\nCubing: tan²Atan²Btan²C ≥ 27\ntanAtanBtanC ≥ 3√3"},
     
    {q: "The number of values of θ in the interval (-π/2, π/2) such that θ ≠ nπ/5 for n = 0, ±1, ±2 and tan θ = cot 5θ as well as sin 2θ = cos 4θ", 
     o: ["3", "4", "7", "5"], 
     a: 0,
     s: "tanθ = cot5θ ⇒ θ = nπ + π/2 - 5θ ⇒ θ = nπ/6 + π/12\nsin2θ = cos4θ ⇒ 2sin²2θ + sin2θ - 1 = 0\nsin2θ = -1 or sin2θ = 1/2 ⇒ θ = π/12, 5π/12, -π/4\nθ takes 3 values in (-π/2, π/2)"},
     
    {q: "For x ∈(0, π), the equation sin x + 2 sin 2x - sin 3x = 3 has", 
     o: ["infinitely many solutions", "three solutions", "one solution", "no solution"], 
     a: 3,
     s: "sinx + 2sin2x - sin3x = 3\nUsing identities: sinx + 4sinxcosx - 3sinx + 4sin³x = 3\nsinx(-2 + 4cosx + 4sin²x) = 3\n3 - (2cosx-1)² = 3cosecx\nLHS ≤ 3, RHS ≥ 3, but not equal for same x\nNo solution"},
     
    {q: "If 5(tan² x - cos² x) = 2cos 2x + 9, then the value of cos 4x is", 
     o: ["1/3", "2/9", "-7/9", "-3/5"], 
     a: 2,
     s: "5(tan²x - cos²x) = 2cos2x + 9\n5(sec²x - 1 - cos²x) = 2(2cos²x-1) + 9\n5sec²x - 5 = 9cos²x + 7\nLet cos²x = t: 5/t = 9t + 12\n9t² + 12t - 5 = 0 ⇒ t = 1/3\ncos2x = 2t - 1 = -1/3\ncos4x = 2cos²2x - 1 = 2/9 - 1 = -7/9"},
     
    {q: "If √2 sin α/√(1 + cos 2α) = 1/7 and √((1 - cos 2β)/2) = 1/√10, α, β ∈ (0, π/2), then tan (α + 2β) is equal to", 
     o: ["1", "-1", "0", "1/2"], 
     a: 0,
     s: "√2 sinα/√(1+cos2α) = 1/7 ⇒ tanα = 1/7\n√((1-cos2β)/2) = 1/√10 ⇒ sinβ = 1/√10 ⇒ tanβ = 1/3\ntan2β = (2tanβ)/(1-tan²β) = 3/4\ntan(α+2β) = (tanα+tan2β)/(1-tanαtan2β) = (1/7+3/4)/(1-3/28) = 25/25 = 1"},
     
    {q: "Let the function f: (0, π) → R be defined by f(θ) = (sin θ + cos θ)² + (sin θ - cos θ)⁴. Suppose, the function f has a local minimum at θ precisely when θ ∈ {λ₁ π, … , λᵣ π}, where 0 < λ₁< ⋯ < λᵣ < 1.Then the value of λ₁ + ⋯ + λᵣ is", 
     o: ["1/4", "-2", "1", "1/2"], 
     a: 3,
     s: "f(θ) = (sinθ+cosθ)² + (sinθ-cosθ)⁴\n= 1 + sin2θ + (1-sin2θ)²\n= sin²2θ - sin2θ + 2\n= (sin2θ - 1/2)² + 7/4\nMinimum when sin2θ = 1/2 ⇒ 2θ = π/6, 5π/6 ⇒ θ = π/12, 5π/12\nλ₁ + λ₂ = 1/12 + 5/12 = 1/2"},
     
    {q: "The number of distinct solutions of equation (5/4)cos²2x + cos⁴x + sin⁴x + cos⁶x + sin⁶x = 2 in the interval [0, 2π] is", 
     o: ["2", "8", "4", "1"], 
     a: 1,
     s: "(5/4)cos²2x + cos⁴x + sin⁴x + cos⁶x + sin⁶x = 2\nSimplify to: (5/4)cos²2x - (5/4)sin²2x - (5/4)sin²2x = 0\nsin²2x = 1/2 ⇒ sin2x = ±1/√2\n2x = π/4, 3π/4, 5π/4, 7π/4, 9π/4, 11π/4, 13π/4, 15π/4\nx = π/8, 3π/8, 5π/8, 7π/8, 9π/8, 11π/8, 13π/8, 15π/8\n8 solutions"},
     
    {q: "For what and only what values of α lying between 0 and π is the inequality sin α cos³α > sin³α cos α valid?", 
     o: ["α ∈ (0, π/4)", "α ∈ (0, π/2)", "α ∈ (π/4, π/2)", "none of these"], 
     a: 0,
     s: "sinαcos³α > sin³αcosα\nsinαcosα(cos²α - sin²α) > 0\n(1/2)sin2α cos2α > 0\n(1/4)sin4α > 0\nsin4α > 0 ⇒ 4α ∈ (0,π) ⇒ α ∈ (0,π/4)"},
     
    {q: "The solution of the equation tan θ. tan 2θ = 1 is", 
     o: ["nπ + 5π/12", "nπ - π/12", "2nπ ± π/4", "nπ ± π/6"], 
     a: 3,
     s: "tanθ.tan2θ = 1\ntanθ.(2tanθ/(1-tan²θ)) = 1\n2tan²θ = 1-tan²θ\n3tan²θ = 1\ntan²θ = 1/3\ntanθ = 1/√3\nθ = nπ ± π/6"}
],
    "Coordinate Geometry": [
    {q: "A-line through A (−5, −4) meets the lines x + 3y + 2 = 0, 2x + y + 4 = 0 and x − y − 5 = 0 at B, C and D, respectively. If (15 / AB)² + (10 / AC)² = (6 / AD)², then the equation of the line is", 
     o: ["2x + 3y + 22 = 0", "3x + 2y + 22 = 0", "2x - 3y + 22 = 0", "3x - 2y + 22 = 0"], 
     a: 0,
     s: "Let line through A: (x+5)/cosθ = (y+4)/sinθ = r\nB: r₁ = 15/(cosθ+3sinθ), C: r₂ = 10/(2cosθ+sinθ), D: r₃ = 6/(cosθ-sinθ)\nGiven: (2cosθ+sinθ)² + (cosθ-sinθ)² = (cosθ+3sinθ)²\nSolving: (2cosθ+3sinθ)² = 0 ⇒ tanθ = -2/3\nEquation: y+4 = (-2/3)(x+5) ⇒ 2x+3y+22=0"},
     
    {q: "The equations of two equal sides of an isosceles triangle are 7x − y + 3 = 0 and x + y − 3 = 0, and the third side passes through the point (1, -10). The equation of the third side is", 
     o: ["3x + y + 7 = 0", "x − 3y − 31 = 0", "Both A and B", "None of these"], 
     a: 2,
     s: "Line through (1,-10): y+10 = m(x-1)\nEqual angles with given lines: |(m-7)/(1+7m)| = |(m+1)/(1-m)|\nSolving: m = 1/3 or 3\nEquations: 3x+y+7=0 and x-3y-31=0"},
     
    {q: "The graph of the function cos x cos (x + 2) − cos² (x + 1) is", 
     o: ["A straight line passing through (0, −sin²1) with slope 2", "A straight line passing through (0, 0)", "A parabola with vertex 75°", "A straight line passing through (π/2, −sin²1) and parallel to x-axis"], 
     a: 3,
     s: "y = cosx cos(x+2) - cos²(x+1)\n= cos(x+1-1)cos(x+1+1) - cos²(x+1)\n= cos²(x+1) - sin²1 - cos²(x+1)\n= -sin²1\nConstant function ⇒ horizontal line through (π/2, -sin²1)"},
     
    {q: "In what direction can a line be drawn through the point (1, 2) so that its points of intersection with the line x + y = 4 is at a distance √6/3 from the given point?", 
     o: ["15° or 75°", "30° or 60°", "45° or 135°", "0° or 90°"], 
     a: 0,
     s: "Line: (x-1)/cosθ = (y-2)/sinθ = r\nPoint on line: (1+rcosθ, 2+rsinθ)\nThis point lies on x+y=4 and r=√6/3\ncosθ+sinθ = 3/√6 = √6/2\nsin(θ+45°) = √3/2 ⇒ θ+45° = 60° or 120° ⇒ θ=15° or 75°"},
     
    {q: "A variable line passes through a fixed point P. The algebraic sum of the perpendicular drawn from (2, 0), (0, 2) and (1, 1) on the line is zero, then what are the coordinates of P?", 
     o: ["(0, 0)", "(1, 1)", "(2, 2)", "(1, 2)"], 
     a: 1,
     s: "Let line: y-y₁ = m(x-x₁)\nSum of perpendicular distances = 0\n[|mx₁-y₁-2m| + |mx₁-y₁+2| + |mx₁-y₁+1-m|]/√(1+m²) = 0\nThis holds for all m ⇒ coefficients of m must be zero\nSolving: x₁=1, y₁=1 ⇒ P(1,1)"},
     
    {q: "The area enclosed within the curve |x|+|y|= 1 is", 
     o: ["1", "2", "3", "4"], 
     a: 1,
     s: "The curve forms a square with vertices at (1,0), (0,1), (-1,0), (0,-1)\nSide length = √2\nArea = (√2)² = 2"},
     
    {q: "The locus of a point P, which divides the line joining (1, 0) and (2 cos θ, 2 sin θ) internally in the ratio 2 : 3 for all θ, is a", 
     o: ["Straight line", "Circle", "Parabola", "Ellipse"], 
     a: 1,
     s: "P = ((4cosθ+3)/5, (4sinθ)/5)\nLet P=(h,k): cosθ=(5h-3)/4, sinθ=5k/4\n(5h-3)²/16 + 25k²/16 = 1 ⇒ (5h-3)²+25k²=16\nThis is a circle"},
     
    {q: "The area of a parallelogram formed by the lines ax ± by ± c = 0, is", 
     o: ["c²/ab", "2c²/ab", "4c²/ab", "c²/2ab"], 
     a: 1,
     s: "Lines form a rhombus with vertices at (±c/a, 0) and (0, ±c/b)\nDiagonals: 2c/a and 2c/b\nArea = ½ × (2c/a) × (2c/b) = 2c²/ab"},
     
    {q: "If the sum of the distances of a point from two perpendicular lines in a plane is 1, then its locus is", 
     o: ["A circle", "A square", "A straight line", "Two parallel lines"], 
     a: 1,
     s: "Let perpendicular lines be x=0 and y=0\nDistance sum = |x|+|y| = 1\nThis forms a square with vertices at (1,0), (0,1), (-1,0), (0,-1)"},
     
    {q: "The line 2x + 3y = 12 meets the x-axis at A and y-axis at B. The line through (5, 5) perpendicular to AB meets the x-axis, y-axis and the AB at C, D and E, respectively. If O is the origin of coordinates, then the area of OCEB is", 
     o: ["20/3", "25/3", "10", "15"], 
     a: 0,
     s: "A(6,0), B(0,4)\nPerpendicular line through (5,5): 3x-2y=5\nC(5/3,0), D(0,-5/2), E(3,2)\nOCEB is quadrilateral with vertices O(0,0), C(5/3,0), E(3,2), B(0,4)\nArea = area of trapezium = ½×(5/3+3)×2 + ½×3×2 = 20/3"}
],
   "Three-Dimensional Geometry": [
    {q: "Perpendiculars are drawn from points on the line (x + 2)/2 = (y + 1)/-1 = z/3 to the plane x + y + z = 3. The feet of perpendiculars lie on the line", 
     o: ["x/5 = (y – 1)/8 = (z – 2)/-13", "x/2 = (y – 1)/3 = (z – 2)/-5", "x/4 = (y – 1)/3 = (z – 2)/-7", "x/2 = (y – 1)/-7 = (z – 2)/5"], 
     a: 3,
     s: "Point on line: (2λ-2, -λ-1, 3λ)\nThis point lies on plane ⇒ 4λ-6=0 ⇒ λ=3/2\nP = (1, -5/2, 9/2)\nFoot from (-2,-1,0) to plane: (0,1,2)\nDirection ratios: (1, -7/2, 5/2) = (2,-7,5)\nLine: x/2 = (y-1)/-7 = (z-2)/5"},
     
    {q: "Two lines L₁: x = 5, y/(3 – α) = z/-2 and L₂: x = α, y/-1 = z/(2 – α) are coplanar. Then α can take values", 
     o: ["1", "2", "3", "4"], 
     a: 0,
     s: "For coplanarity: |5-α, 0, 0; 0, 3-α, -2; 1, -1, 2-α| = 0\n(5-α)[(3-α)(2-α)-2] = 0\n(5-α)(α-1)(α-4)=0 ⇒ α=1,4,5"},
     
    {q: "Let P be the image of the point (3, 1, 7) with respect to the plane x – y + z = 3. Then the equation of the plane passing through P and containing the straight line x/1 = y/2 = z/1 is", 
     o: ["x + y – 3z = 0", "3x + z = 0", "x – 4y + 7z = 0", "2x – y = 0"], 
     a: 2,
     s: "Image P: (-1, 5, 3)\nPlane through P: a(x+1)+b(y-5)+c(z-3)=0\nContains line ⇒ a+2b+c=0\nContains origin ⇒ a-5b-3c=0\nSolving: a/1 = b/-4 = c/7\nEquation: (x+1)-4(y-5)+7(z-3)=0 ⇒ x-4y+7z=0"},
     
    {q: "The equation of the plane passing through the point (1, 1, 1) and perpendicular to the planes 2x + y – 2z = 5 and 3x – 6y – 2z = 7 is", 
     o: ["14x + 2y + 15z = 31", "14x + 2y – 15z = 1", "-14x + 2y + 15z = 3", "14x – 2y + 15z = 27"], 
     a: 0,
     s: "Normal vector = |i j k; 2 1 -2; 3 -6 -2| = (-14, -2, -15)\nPlane: -14(x-1)-2(y-1)-15(z-1)=0 ⇒ 14x+2y+15z=31"},
     
    {q: "If for some α ∈ R, the lines L₁: (x + 1)/2 = (y – 2)/-1 = (z – 1)/1 and L₂: (x + 2)/α = (y + 1)/(5 – α) = (z + 1)/1 are coplanar, then the line L₂ passes through the point:", 
     o: ["(2, -10, -2)", "(10, -2, -2)", "(10, 2, 2)", "(-2, 10, 2)"], 
     a: 0,
     s: "Coplanarity condition: |1, -3, -2; 2, -1, 1; α, 5-α, 1| = 0\nSolving: -1(-1+α-5)+3(2-α)-2(10-2α+α)=0 ⇒ α=-4\nL₂: (x+2)/-4 = (y+1)/9 = (z+1)/1\nPoint (2,-10,-2) satisfies this equation"},
     
    {q: "The distance of the point (1, -2, 3) from the plane x – y + z = 5 measured parallel to the line (x/2) = (y/3) = (z/-6) is:", 
     o: ["1/7", "7", "7/5", "1"], 
     a: 3,
     s: "Line through (1,-2,3): (x-1)/2 = (y+2)/3 = (z-3)/-6 = λ\nPoint on line: (2λ+1, 3λ-2, -6λ+3)\nSubstitute in plane: 2λ+1-3λ+2-6λ+3=5 ⇒ -7λ=-1 ⇒ λ=1/7\nDistance = 7λ = 1"},
     
    {q: "Let P be a point in the first octant, whose image Q in the plane x + y = 3 lies on the z-axis. Let the distance of P from the x-axis be 5. If R is the image of P in the xy-plane, then the length of PR is", 
     o: ["6", "7", "8", "9"], 
     a: 2,
     s: "Let P=(a,b,c), Q=(0,0,c)\nPQ ⟂ plane ⇒ (a,b) ∥ (1,1) ⇒ a=b\nMidpoint on plane: a/2+b/2=3 ⇒ a=b=3\nDistance from x-axis = √(b²+c²)=5 ⇒ 9+c²=25 ⇒ c=±4\nPR = |2c| = 8"},
     
    {q: "Let α, β, γ, δ be real numbers such that α² + β² + γ² ≠ 0 and α + γ = 1. Suppose the point (3, 2, -1) is the mirror image of the point (1, 0, -1) with respect to the plane αx + βy + γz = δ. Then which of the following statements is/are TRUE?", 
     o: ["α + β = 2", "δ – γ = 3", "δ + β = 4", "α + β + γ = δ"], 
     a: 0,
     s: "Midpoint (2,1,-1) lies on plane\nPQ ⟂ plane ⇒ direction (2,2,0) ∥ normal (α,β,γ)\nα=β, γ=0\nPlane: x+y=3 ⇒ α=1, β=1, γ=0, δ=3\nα+β=2, δ-γ=3, δ+β=4, α+β+γ=2≠3"},
     
    {q: "In R³, consider the planes P₁: y = 0 and P₂: x + z = 1. Let P₃ be a plane, different from P₁ and P₂, which passes through the intersection of P₁ and P₂. If the distance of the point (0, 1, 0) from P₃ is 1 and the distance of a point (α, β, γ) from P₃ is 2, then which of the following relation is (are) true?", 
     o: ["2α + β + 2γ + 2= 0", "2α – β + 2γ + 4 = 0", "2α + β – 2γ – 10= 0", "2α – β + 2γ – 8 = 0"], 
     a: 1,
     s: "P₃: (x+z-1)+λy=0 ⇒ x+λy+z-1=0\nDistance from (0,1,0): |λ-1|/√(2+λ²)=1 ⇒ λ=-1/2\nDistance from (α,β,γ): |α-β/2+γ-1|/(3/2)=2\n2α-β+2γ-2=±6 ⇒ 2α-β+2γ+4=0 or 2α-β+2γ-8=0"},
     
    {q: "If the straight lines (x – 1)/2 = (y + 1)/k = z/2 and (x + 1)/5 = (y + 1)/2 = z/k are coplanar, then the plane(s) containing these two lines is (are)", 
     o: ["y + 2z = -1", "y + z = -1", "y – z = -1", "y – 2z = -1"], 
     a: 1,
     s: "Coplanarity: |2, -2, -2; 2, k, 2; 5, 2, k| = 0\nSolving: k=±2\nFor k=2: plane y-z=-1\nFor k=-2: plane y+z=-1"}
],
    "Probability": [
    {q: "A die is thrown two times and the sum of the scores appearing on the die is observed to be a multiple of 4. Then the conditional probability that the score 4 has appeared atleast once is:", 
     o: ["1/3", "1/4", "1/8", "1/9"], 
     a: 3,
     s: "A = sum multiple of 4: {(1,3), (2,2), (3,1), (2,6), (3,5), (4,4), (5,3), (6,2), (6,6)}\nB = 4 appears at least once: {(1,4), (2,4), (3,4), (4,4), (5,4), (6,4), (4,1), (4,2), (4,3), (4,5), (4,6)}\nA∩B = {(4,4)}\nP(B|A) = 1/9"},
     
    {q: "There are three bags B₁, B₂, and B₃. The bag B₁ contains 5 red and 5 green balls, B₂ contains 3 red and 5 green balls, and B₃ contains 5 red and 3 green balls, Bags B₁, B₂ and B₃ have probabilities 3/10, 3/10, and 4/10 respectively of being chosen. A bag is selected at random and a ball is chosen at random from the bag. Then which of the following options is/are correct?", 
     o: ["Probability that the selected bag is B₃ and the chosen ball is green equals 3/10", "Probability that the chosen ball is green equals 39/80", "Probability that the chosen ball is green, given that the selected bag is B₃, equals 3/8", "Probability that the selected bag is B₃, given that the chosen balls is green, equals 5/13"], 
     a: 1,
     s: "P(B₃∩G) = (3/8)×(4/10) = 3/20\nP(G) = (5/10)×(3/10) + (5/8)×(3/10) + (3/8)×(4/10) = 39/80\nP(G|B₃) = 3/8\nP(B₃|G) = (3/20)/(39/80) = 4/13"},
     
    {q: "A box contains 15 green and 10 yellow balls. If 10 balls are randomly drawn, one-by-one, with replacement, then the variance of the number of green balls drawn is:", 
     o: ["6", "4", "6/25", "12/5"], 
     a: 3,
     s: "p = 15/25 = 3/5, q = 2/5, n = 10\nVariance = npq = 10×(3/5)×(2/5) = 12/5"},
     
    {q: "For three events A, B, and C, P (Exactly one of A or B occurs) = P (Exactly one of B or C occurs) = P (Exactly one of C or A occurs) = 1/4 and P (All the three events occur simultaneously) = 1/16. Then the probability that at least one of the events occurs is:", 
     o: ["7/16", "7/64", "3/16", "7/32"], 
     a: 0,
     s: "P(A)+P(B)-2P(A∩B)=1/4\nP(B)+P(C)-2P(B∩C)=1/4\nP(C)+P(A)-2P(C∩A)=1/4\nAdding: 2[P(A)+P(B)+P(C)-P(A∩B)-P(B∩C)-P(C∩A)]=3/4\nP(A∪B∪C) = [P(A)+P(B)+P(C)-P(A∩B)-P(B∩C)-P(C∩A)] + P(A∩B∩C) = 3/8 + 1/16 = 7/16"},
     
    {q: "If two different numbers are taken from the set {0, 1, 2, 3, ……, 10}; then the probability that their sum, as well as absolute difference, are both multiples of 4, is:", 
     o: ["12/55", "14/45", "7/55", "6/55"], 
     a: 3,
     s: "Total ways = ¹¹C₂ = 55\nFavorable pairs: (0,4), (0,8), (4,8), (2,6), (2,10), (6,10)\nProbability = 6/55"},
     
    {q: "A bag contains 4 red and 6 black balls. A ball is drawn at random from the bag, its colour is observed and this ball along with two additional balls of the same colour are returned to the bag. If now a ball is drawn at random from the bag, then the probability that this drawn ball is red, is:", 
     o: ["1/5", "3/4", "3/10", "2/5"], 
     a: 3,
     s: "Case 1: First ball red (4/10), then bag has 6 red + 6 black\nCase 2: First ball black (6/10), then bag has 4 red + 8 black\nP(second red) = (4/10)×(6/12) + (6/10)×(4/12) = 1/5 + 1/5 = 2/5"},
     
    {q: "Let U₁ and U₂ be two urns such that U₁ contains 3 white and 2 red balls, and U₂ contains only 1 white ball. A fair coin is tossed. If head appears then 1 ball is drawn at random from U₁ and put into U₂. However, if tail appears then 2 balls are drawn at random from U₁ and put into U₂. Now 1 ball is drawn at random from U₂. Given that the drawn ball from U₂ is white, the probability that head appeared on the coin is", 
     o: ["17/23", "11/23", "15/23", "12/23"], 
     a: 3,
     s: "P(H|W) = [P(W|H)P(H)]/[P(W|H)P(H)+P(W|T)P(T)]\nP(W|H) = (3/5)×1 + (2/5)×(1/2) = 4/5\nP(W|T) = (³C₂/⁵C₂)×1 + (²C₂/⁵C₂)×(1/3) + (³C₁²C₁/⁵C₂)×(2/3) = 23/30\nP(H|W) = (4/5×1/2)/(4/5×1/2+23/30×1/2) = 12/23"},
     
    {q: "The probability of the drawn ball from U₂ being white is", 
     o: ["13/30", "23/30", "19/30", "11/30"], 
     a: 1,
     s: "P(W) = P(H,W) + P(T,W)\nP(H,W) = 1/2×[(3/5)×1 + (2/5)×(1/2)] = 2/5\nP(T,W) = 1/2×[(³C₂/⁵C₂)×1 + (²C₂/⁵C₂)×(1/3) + (³C₁²C₁/⁵C₂)×(2/3)] = 11/30\nP(W) = 2/5 + 11/30 = 23/30"},
     
    {q: "Four persons independently solve a certain problem correctly with probabilities 1/2, 3/4, 1/4, 1/8. Then the probability that the problem is solved correctly by at least one of them is", 
     o: ["235/256", "21/256", "3/256", "253/256"], 
     a: 0,
     s: "P(none solve) = (1/2)×(1/4)×(3/4)×(7/8) = 21/256\nP(at least one) = 1 - 21/256 = 235/256"},
     
    {q: "A seven-digit number is formed using the digit 3, 3, 4, 4, 4, 5, 5. The probability, that number so formed is divisible by 2, is:", 
     o: ["6/7", "4/7", "3/7", "1/7"], 
     a: 2,
     s: "Total numbers = 7!/(2!3!2!) = 210\nNumbers divisible by 2 (ends with 4) = 6!/(2!2!2!) = 90\nProbability = 90/210 = 3/7"}
],
    "Statistics": [
    {q: "The mean of n items is x̄. If the first term is increased by 1, the second by 2 and so on, then what is the new mean?", 
     o: ["x̄ + (n+1)/2", "x̄ + n/2", "x̄ + (n-1)/2", "x̄ + n"], 
     a: 0,
     s: "New mean = [1/n]Σ(xᵢ + i) = [1/n]Σxᵢ + [1/n]Σi = x̄ + [1/n]×[n(n+1)/2] = x̄ + (n+1)/2"},
     
    {q: "The average of n numbers x₁, x₂,……. xₙ is M. If xₙ is replaced by x′, then what is the new average?", 
     o: ["[nM - xₙ + x′]/n", "[nM + x′]/n", "[M - xₙ + x′]/n", "[nM - xₙ]/n"], 
     a: 0,
     s: "Original sum = nM\nNew sum = nM - xₙ + x′\nNew average = (nM - xₙ + x′)/n"},
     
    {q: "Mean of 100 observations is 45. It was later found that two observations 19 and 31 were incorrectly recorded as 91 and 13. The correct mean is", 
     o: ["44.46", "44.64", "45.46", "45.64"], 
     a: 0,
     s: "Original sum = 45×100 = 4500\nCorrect sum = 4500 - (91+13) + (19+31) = 4446\nCorrect mean = 4446/100 = 44.46"},
     
    {q: "The following data gives the distribution of the height of students. Height (in cm): 160,150,152,152,161,154,155 with frequencies: 12,8,4,4,3,3,7. What is the median of the distribution?", 
     o: ["154", "155", "156", "157"], 
     a: 1,
     s: "Arrange in order: 150(8),152(12),154(15),155(22),156(25),160(37),161(41)\nTotal 41 observations ⇒ median = 21st observation\nCumulative frequencies: 150(8),152(12),154(15),155(22) ⇒ 21st falls in 155 group"},
     
    {q: "The mean and S.D. of the marks of 200 candidates were found to be 40 and 15 respectively. Later, it was discovered that a score of 40 was wrongly read as 50. The correct mean and S.D. respectively are", 
     o: ["39.95, 14.98", "39.95, 15.02", "40.05, 14.98", "40.05, 15.02"], 
     a: 0,
     s: "Corrected sum = 40×200 - 50 + 40 = 7990\nCorrect mean = 7990/200 = 39.95\nOriginal Σx² = 200(15²+40²) = 365000\nCorrect Σx² = 365000 - 50² + 40² = 364100\nCorrect variance = 364100/200 - 39.95² = 224.5\nCorrect SD = √224.5 = 14.98"},
     
    {q: "Let r be the range and S² = 1/(n-1)Σ(xᵢ-x̄)² be the S.D. of a set of observations x₁, x₂,….. xₙ, then what is the condition for S?", 
     o: ["S ≤ r√(n/(n-1))", "S ≥ r√(n/(n-1))", "S ≤ r", "S ≥ r"], 
     a: 0,
     s: "Since (xᵢ-x̄)² ≤ r² for all i\nS² = 1/(n-1)Σ(xᵢ-x̄)² ≤ 1/(n-1)×n×r²\nS ≤ r√(n/(n-1))"},
     
    {q: "If a variable takes the discrete values α−4, α−7/2, α−5/2, α−3, α−2, α+1/2, α−1/2, α+5 (α>0), then the median is", 
     o: ["α−5/4", "α−1/2", "α+1/4", "α+5/4"], 
     a: 0,
     s: "Arrange: α−7/2, α−3, α−5/2, α−2, α−1/2, α+1/2, α−4, α+5\nSorted: α−7/2, α−3, α−5/2, α−2, α−1/2, α+1/2, α−4, α+5\nMedian = average of 4th and 5th = [α−2 + α−1/2]/2 = α−5/4"},
     
    {q: "The median of a set of 9 distinct observations is 20.5. If each of the largest 4 observations of the set is increased by 2, then the median of the new set is", 
     o: ["20.5", "22.5", "24.5", "unchanged"], 
     a: 0,
     s: "For 9 observations, median is the 5th observation\nIncreasing largest 4 observations (6th-9th) doesn't affect the 5th observation\nMedian remains 20.5"},
     
    {q: "Runs scored by a batsman in 10 innings are: 38, 70, 48, 34, 42, 55, 63, 46, 54, 44. The mean deviation is", 
     o: ["8.6", "9.6", "10.6", "11.6"], 
     a: 0,
     s: "Arrange: 34,38,42,44,46,48,54,55,63,70\nMedian = (46+48)/2 = 47\nMean deviation = (Σ|xᵢ-47|)/10 = (13+9+5+3+1+1+7+8+16+23)/10 = 86/10 = 8.6"}
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
