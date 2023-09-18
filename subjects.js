var maths;
var algebra, geometry, calculus, statistics;
function subjects(){
    maths.visible = true;

    if(mouseWentUp(LEFT) && mou.overlap(maths)){
        maths.life = 0;        
        algebra.visible = true;
        geometry.visible = true;
        calculus.visible = true; 
        statistics.visible = true;
    }
}

/*
Algebra:
Definition: Algebra is a branch of mathematics that deals with symbols and the rules for manipulating those symbols to solve equations and study relationships between variables.

Expressions and Equations:
An algebraic expression is a combination of variables, constants, and mathematical operations (addition, subtraction, multiplication, division) without an equal sign.
An algebraic equation is a statement that two algebraic expressions are equal.
Variables: In algebra, letters (often x, y, or z) represent unknown or variable quantities. These variables can take on different values.
Constants: Constants are fixed numbers in algebra, such as 2, π, or 7. They do not change their value.


Operations:
Addition and Subtraction: You can add and subtract like terms (terms with the same variables raised to the same powers).
Multiplication: Multiplication can be done using the distributive property, FOIL method, or by multiplying coefficients and adding exponents when dealing with variables.
Division: Division involves dividing the coefficients and subtracting the exponents of variables with the same base.

Solving Equations:
To solve an equation, the goal is to isolate the variable on one side of the equation.
You can perform the same operations on both sides of the equation to maintain its equality.
Linear Equations: These are equations where the highest power of the variable is 1. They have the form ax + b = 0, where a and b are constants.

Quadratic Equations: These are equations where the highest power of the variable is 2. They have the form ax^2 + bx + c = 0.

Polynomials: These are expressions with multiple terms. A polynomial can have any number of terms, and the terms can be added or subtracted.

Factoring: Factoring involves finding the prime factors or common factors of an expression to simplify it or solve equations.

Functions: A function is a rule that assigns one output to each input. In algebra, functions are often represented as f(x), where "x" is the input variable.

Graphs: Algebraic equations can be represented graphically, where the x and y axes represent variables, and the graph represents the relationship between them.

Inequalities: Inequalities compare two expressions using symbols like < (less than), > (greater than), ≤ (less than or equal to), ≥ (greater than or equal to).

Exponents: Exponents represent repeated multiplication. Rules for exponents include multiplying like bases (adding exponents), dividing like bases (subtracting exponents), and raising a power to a power (multiply exponents).

Radicals: Radicals involve square roots (√) and other root expressions. They are used to represent the inverse of exponentiation.

Quadratic Formula: The quadratic formula is used to find the solutions of a quadratic equation: x = (-b ± √(b^2 - 4ac)) / (2a).

Word Problems: Algebra is used to solve real-world problems by translating them into algebraic equations and solving for the desired variable.

Systems of Equations: These involve multiple equations with multiple variables. Solutions are points where all equations are satisfied simultaneously.

Matrices and Vectors: Algebra is used in linear algebra to work with matrices and vectors, which are fundamental in various fields, including computer graphics and physics.

Applications: Algebra is used in various fields like physics, engineering, economics, and computer science for modeling, problem-solving, and analysis.

These are some fundamental notes on algebra. Algebra forms the basis for more advanced mathematical concepts and is essential for problem-solving in many areas of science and engineering.


Geometry:
Definition of Geometry:
Geometry is a branch of mathematics that deals with the study of shapes, sizes, properties, and dimensions of objects and spaces in a two-dimensional (2D) and three-dimensional (3D) context.

Geometric Shapes:
Geometry involves the exploration of various shapes, including points, lines, angles, polygons, circles, and solids (such as cubes, spheres, and cylinders).

Point, Line, and Plane:
A point is a location in space with no size or dimension.
A line is a straight path that extends infinitely in both directions.
A plane is a flat, two-dimensional surface extending infinitely in all directions.

Line Segments and Rays:
Line segments are portions of a line with two endpoints.
Rays have one endpoint and extend infinitely in one direction.

Angles:
An angle is formed by two rays or line segments with a common endpoint (vertex).
Angles are measured in degrees, and a full circle contains 360 degrees.

Types of Angles:
Right Angle: Measures 90 degrees.
Acute Angle: Measures less than 90 degrees.
Obtuse Angle: Measures more than 90 degrees.
Straight Angle: Measures 180 degrees.
Reflex Angle: Measures more than 180 degrees but less than 360 degrees.

Polygons:
Polygons are closed plane figures formed by connecting line segments.
Common polygons include triangles, quadrilaterals, pentagons, hexagons, and so on.
The sum of interior angles in a polygon can be calculated using the formula (n-2) * 180 degrees, where n is the number of sides.

Circles:
A circle is a set of points equidistant from a central point (the center).
Important terms include radius (distance from center to any point on the circle), diameter (twice the radius), and circumference (the perimeter of the circle).

Area and Perimeter:
Geometry involves the calculation of the area (space enclosed) and perimeter (total boundary length) of various shapes.
Different formulas are used for different shapes, such as the area of a rectangle (length x width) and the circumference of a circle (2πr).

Congruence and Similarity:
Congruent shapes have the same size and shape.
Similar shapes have the same shape but different sizes, and their corresponding angles are equal.

Transformations:
Geometry explores transformations like translations, rotations, reflections, and dilations, which change the position, orientation, or size of shapes.

Coordinate Geometry:
Combines algebra and geometry to study geometric objects using coordinates and equations.
The Cartesian plane is used to represent points and lines in two-dimensional space.

Solid Geometry:
Focuses on three-dimensional shapes (solids) such as cubes, spheres, cylinders, and cones.
Involves calculations of volume and surface area for these solids.

Geometric Proofs:
Geometry often involves proving mathematical statements or theorems using logical reasoning and a series of steps.
Common proof techniques include direct proof, proof by contradiction, and mathematical induction.

Real-World Applications:
Geometry is widely used in various fields, including architecture, engineering, art, navigation, and design.
Understanding geometry provides valuable insights into the physical world and is essential for problem-solving, spatial reasoning, and advanced mathematical studies. It also plays a crucial role in practical applications across a wide range of disciplines.
 
Calculus:
Calculus is a branch of mathematics that deals with rates of change, accumulation, and the study of functions through limits, derivatives, and integrals. It has two main branches: differential calculus and integral calculus. Here are detailed notes on various aspects of calculus:

1. Introduction to Calculus:
Calculus is credited to Sir Isaac Newton and Gottfried Wilhelm Leibniz in the late 17th century.
It provides a framework to understand how things change and accumulate.

2. Limits:
Limits are foundational in calculus and describe the behavior of a function as it approaches a particular point.
The limit of a function, f(x), as x approaches a specific value, c, is denoted as lim(x→c) f(x).
Limits help define continuity, derivatives, and integrals.

3. Continuity:
A function is continuous at a point if its value at that point equals the limit as it approaches that point.
Continuous functions have no gaps, jumps, or asymptotes.

4. Derivatives:
The derivative of a function represents its instantaneous rate of change at a specific point.
If f(x) is a function, its derivative is denoted as f'(x) or df/dx.
The power rule, product rule, quotient rule, and chain rule are essential tools for finding derivatives.
Applications include finding slopes of tangent lines, optimization, and velocity problems.

5. Differentiation:
Differentiation is the process of finding the derivative of a function.
The derivative of a function f(x) is another function, denoted as f'(x) or dy/dx, which gives the slope of the tangent line at any point on the graph of f(x).

6. Applications of Derivatives:
Optimization problems: Calculus helps find maximum and minimum values of functions.
Related rates problems: Used to analyze changing quantities in real-world scenarios.
Rates of change: Calculating velocities, acceleration, and growth rates.
Approximations: Using linear approximations (tangent lines) to estimate function values.

7. Integrals:
Integrals are the reverse of derivatives; they represent the accumulation of quantities.
The integral of a function f(x) with respect to x is denoted as ∫f(x) dx.
Definite integrals find the exact accumulation over a specified interval, while indefinite integrals represent a family of antiderivatives.

8. Integration Techniques:
Integration by substitution, integration by parts, and partial fractions are common techniques for finding integrals.
Integration tables and computer software are also used for complex integrations.

9. Fundamental Theorem of Calculus:
The Fundamental Theorem states that integration and differentiation are inverse operations.
It provides a powerful link between derivatives and integrals.

10. Applications of Integrals:
- Finding areas under curves (definite integrals).
- Calculating displacement, distance traveled, and work done.
- Analyzing volumes of solids using methods like the disk and shell methods.

11. Multivariable Calculus:
- Extends calculus to functions with multiple variables, introducing concepts like partial derivatives, gradients, and multiple integrals.
- Used in physics, engineering, economics, and other fields to model complex systems.

12. Calculus in Real Life:
- Calculus plays a vital role in modeling real-world phenomena, from predicting stock market trends to simulating physical processes.
- It is essential in engineering, physics, economics, and computer science.

Calculus is a foundational branch of mathematics that underpins much of modern science and engineering. It provides powerful tools for analyzing change and accumulation and has a wide range of practical applications in various fields. Mastery of calculus is crucial for advancing in STEM (science, technology, engineering, and mathematics) disciplines and solving complex problems in the real world.

Discrete Mathematics:

Definition of Discrete Mathematics:
Discrete mathematics is a branch of mathematics that deals with countable, distinct, and separate objects or structures. It focuses on mathematical concepts and techniques for solving problems involving finite sets of values.

Key Concepts and Topics in Discrete Mathematics:

Sets and Relations:
Sets: Collections of distinct elements. Operations include union, intersection, and complement.
Relations: Binary relations describe relationships between elements in sets.

Functions and Sequences:
Functions: A mapping between two sets, often represented as f(x) = y. Important types include injective, surjective, and bijective functions.
Sequences: Ordered lists of elements, often defined recursively or using closed-form expressions.

Logic and Propositional Logic:
Logic: Study of reasoning and argumentation.
Propositional Logic: Dealing with propositions (statements) and logical operators (AND, OR, NOT, IMPLIES) to analyze the truth values of compound statements.
Predicate Logic:
Extends propositional logic to deal with quantifiers (forall and exists) and predicates (statements containing variables).

Proofs and Mathematical Induction:
Proofs: Demonstrations of mathematical statements' truth.
Mathematical Induction: A method to prove statements about integers by establishing a base case and an inductive step.

Number Theory:
The study of integers and their properties. Includes topics like divisibility, prime numbers, congruences, and the Fundamental Theorem of Arithmetic.

Combinatorics:
Counting and arrangements of objects. Topics include permutations, combinations, binomial coefficients, and the Pigeonhole Principle.

Graph Theory:
Study of graphs (nodes/vertices connected by edges). Key concepts include paths, cycles, trees, and graph algorithms (e.g., Dijkstra's and Kruskal's algorithms).

Discrete Probability:
Probability theory applied to countable sets. Involves probability distributions, random variables, and expected values.

Set Theory:
A foundational area dealing with sets, their operations, cardinality, and transfinite numbers (e.g., countable and uncountable sets).

Algorithms and Complexity:
Analysis of algorithms, their efficiency, and complexity classes (e.g., P, NP, NP-hard) related to problem-solving.

Coding Theory:
Study of error-correcting codes used in data transmission and storage.

Cryptography:
Techniques for secure communication and encryption, including public-key cryptography and RSA algorithm.

Discrete Structures:
Structures that are countable and separable, including relations, lattices, and Boolean algebras.
Applications of Discrete Mathematics:

Computer Science: Algorithms, data structures, cryptography, and database design.

Information Theory: Study of data compression and transmission.

Operations Research: Optimization in various fields like logistics and economics.

Cryptography: Ensuring secure communication and data protection.

Combinatorial Optimization: Solving real-world problems with discrete decision variables.

Artificial Intelligence: Logical reasoning and problem-solving.

Networking: Routing algorithms and network design.

Game Theory: Analyzing strategic interactions and decision-making.

Importance of Discrete Mathematics:
Provides the theoretical foundation for computer science and many other disciplines.
Develops critical thinking, problem-solving, and logical reasoning skills.
Addresses real-world problems with finite, discrete solutions.
Enhances mathematical maturity and prepares students for advanced mathematics.
Discrete mathematics is a fundamental area of study with diverse applications across various fields, making it an essential subject for students in mathematics, computer science, engineering, and related disciplines.

Statistics and Probability:

Statistics:
Definition:
Statistics is the branch of mathematics that involves collecting, analyzing, interpreting, presenting, and organizing data.

Data Types:
Data can be categorized into two main types: qualitative (categorical) and quantitative (numerical).
Qualitative data includes categories or labels (e.g., colors, types of cars).
Quantitative data consists of numbers and can be further classified as discrete (whole numbers) or continuous (infinite values).

Descriptive Statistics:
Descriptive statistics summarize and describe data.
Measures include mean (average), median (middle value), mode (most frequent), range (difference between max and min), and standard deviation (measure of data spread).

Inferential Statistics:
Inferential statistics involve making predictions or inferences about a population based on a sample.
Methods include hypothesis testing, confidence intervals, and regression analysis.

Probability Distributions:
Probability distributions describe the likelihood of different outcomes in a random experiment.
Common distributions include the normal distribution (bell curve), binomial distribution, and Poisson distribution.

Sampling Techniques:
Random sampling ensures each element in a population has an equal chance of being included in a sample.
Stratified, cluster, and systematic sampling are other techniques used to collect representative samples.

Hypothesis Testing:
Hypothesis testing involves making statistical decisions about population parameters based on sample data.
It typically includes setting up null and alternative hypotheses and using significance levels (e.g., alpha) to make decisions.

Confidence Intervals:
Confidence intervals estimate a range within which a population parameter is likely to fall.
A common confidence level is 95%, but it can be adjusted based on the desired level of certainty.

Regression Analysis:
Regression analysis examines the relationship between one or more independent variables and a dependent variable.
Linear regression is a common method for modeling this relationship.

Statistical Software:
Statistical software packages like R, Python (with libraries like NumPy and Pandas), and SPSS are used to perform complex statistical analyses.

Probability:
Definition:
Probability is the measure of the likelihood of an event occurring.
It quantifies uncertainty and is used in various fields, including mathematics, science, and decision-making.

Basic Probability Concepts:
Sample space: The set of all possible outcomes in a random experiment.
Event: A subset of the sample space.
Probability of an event: A number between 0 and 1 representing the likelihood of that event occurring.

Probability Rules:
Addition Rule: P(A or B) = P(A) + P(B) - P(A and B) for two events A and B.
Multiplication Rule: P(A and B) = P(A) * P(B|A) for two events A and B.
Conditional Probability: P(A|B) = P(A and B) / P(B) when event B has occurred.

Independence:
Two events A and B are independent if P(A and B) = P(A) * P(B).
Otherwise, they are dependent.

Bayes' Theorem:
Bayes' Theorem calculates the probability of an event based on prior knowledge of conditions related to the event.

Random Variables:
A random variable assigns a numerical value to each outcome of a random experiment.
It can be discrete (with a countable set of values) or continuous (with an uncountable range).

Probability Distributions:
Probability distributions describe the likelihood of different values for a random variable.
Examples include the uniform distribution, exponential distribution, and normal distribution.

Expected Value and Variance:
The expected value (mean) of a random variable is a measure of its central tendency.
Variance measures how data points are spread around the expected value.

Law of Large Numbers and Central Limit Theorem:
The Law of Large Numbers states that as the sample size increases, the sample mean approaches the population mean.
The Central Limit Theorem states that the distribution of the sample mean approaches a normal distribution, regardless of the population distribution, as the sample size increases.

Applications:
Probability theory is used in various fields, such as finance (risk assessment), science (quantum mechanics), and everyday decision-making.
Understanding statistics and probability is essential for making informed decisions, conducting research, and drawing meaningful conclusions from data. These concepts are foundational in many scientific, business, and social applications, enabling us to deal with uncertainty and variability.
*/