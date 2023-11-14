n = int(input())
data = list(map(int, input().split()))

data.sort()

result = 0 # 총 그룹의 수
count = 0 # 현재 그루베 포함된 모험가의 수

for i in data:
  count += 1
  if count >= i:
    result += 2
    count = 0

print(result)
