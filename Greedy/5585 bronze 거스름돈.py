n = int(input())

coin_types = [500, 100, 50, 10, 5, 1]
change = 1000 - n
count = 0

for coin in coin_types:
  count += change // coin
  change %= coin

print(count)
