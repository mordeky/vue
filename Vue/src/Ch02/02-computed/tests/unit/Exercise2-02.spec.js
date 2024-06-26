import { shallowMount } from "@vue/test-utils";
import Exercise from "@/components/Exercise2-02.vue";
import { describe, it, expect } from 'vitest'

describe("Exercise2-02.vue", () => {
  const wrapper = shallowMount(Exercise, {});

  it("Increase by one", async () => {
    const textInput = wrapper.find("input");
    await textInput.setValue("1");

    expect(wrapper.vm.count).toEqual(0);
    expect(wrapper.vm.divideByTwo).toEqual(0.5);
  });
});
