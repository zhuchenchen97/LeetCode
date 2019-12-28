# Write your MySQL query statement below
SELECT DISTINCT Email
FROM Person
WHERE Email In(
SELECT Email
FROM Person
GROUP BY Email
    Having count(Email)>1
)