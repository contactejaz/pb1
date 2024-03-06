def divide(dividend, divisor):
    INT_MIN = -2**31
    INT_MAX = 2**31 - 1

    if dividend == INT_MIN and divisor == -1:
        return INT_MAX

    is_negative = (dividend < 0) ^ (divisor < 0)
    dvd = abs(dividend)
    dvs = abs(divisor)
    quotient = 0

    while dvd >= dvs:
        temp, multiple = dvs, 1
        while dvd >= (temp << 1):
            temp <<= 1
            multiple <<= 1
        dvd -= temp
        quotient += multiple

    return -quotient if is_negative else quotient

# Example usage
print(divide(10, 3))  # Output: 3
print(divide(7, -3))  # Output: -2