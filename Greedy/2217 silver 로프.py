n = int(input())
k = []

for _ in range(n):
  k.append(int(input()))
k.sort()

answers = []
for x in k:
  answer.append(x*n)
  n -= 1
print(max(answers))
