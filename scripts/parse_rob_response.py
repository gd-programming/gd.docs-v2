def common_parse_to_dict(data: str, extras: bool = False) -> list:
    """
        @params:
            data: str - A raw response of the common key:value format returned from RobTops servers
            extras: bool - appends a list of metadata found on the raw response. always the final element in the list.

        @return:
            type: list
            contents: Dictionaries of they key:value pairs.
    """

    components = data.split("#")
    objects = components[0].split("|")

    parsed = []

    for x in objects:
        obj = {}
        temp = x.split(":")

        for i in range(0, len(temp), 2):
            obj[temp[i]] = temp[i + 1]

        parsed.append(obj)

    # if the list should include metadata, hashes, etc...
    if extras: parsed.append(components[1:len(components)])

    return parsed