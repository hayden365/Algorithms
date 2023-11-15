# 전부 0으로 바꾸는 경우와 전부 1로 바꾸는 경우 중에서 더 적은 횟수를 가지는 경우를 계산

data = input()
count0 = 0
count1 = 0

if data[0] == '1':
  count0 += 1
else:
  count1 += 1

for i in range(len(data) - 1):
  if data[i] != data(i + 1):
    if data[i + 1] == '1':
      count0 += 1
    else:
      count1 += 1

print(min(count0, count1))
