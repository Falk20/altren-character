<template>
  <v-card>
    <v-card-item class="align-start">
      <v-card-title
        class="text-body-1 font-weight-medium text-wrap item-card_title"
        prepend-icon="mdi-arrow-projectile"
      >
        {{ char.personalInfo.name }}
      </v-card-title>

      <v-card-subtitle class="d-flex align-center mt-1 pb-0">
        Тари: {{ char.inventory.wallet }}
      </v-card-subtitle>

      <template #append>
        <div class="d-flex ga-1">
          <div class="d-flex align-center">
            <v-icon color="error" icon="mdi-heart"></v-icon>
            {{ char.status.hits }}
          </div>
          <div v-if="!isFameLvl3" class="d-flex align-center">
            <v-icon :color="manaBar.color" :icon="manaBar.fullIcon"></v-icon>
            {{ char.status.mana }}
          </div>
          <div v-if="isBard" class="d-flex align-center">
            <v-icon color="light-blue-lighten-1" icon="mdi-music-note"></v-icon>
            {{ char.status.inspiration }}
          </div>
          <div class="d-flex align-center">
            <v-icon :color="armorColor"> mdi-shield </v-icon>
            {{ calcThreshold }}
          </div>
          <div class="d-flex align-center">
            <v-icon color="teal"> mdi-account-multiple-outline </v-icon>
            {{ hittingDifficulty }}
          </div>
          <div class="d-flex align-center">
            <v-icon color="teal"> mdi-arrow-up-bold-hexagon-outline </v-icon>
            {{ stepCount }}
          </div>
        </div>
      </template>
    </v-card-item>

    <v-expansion-panels multiple variant="accordion">
      <v-expansion-panel title="Инвентарь">
        <v-expansion-panel-text>
          <gm-char-bag
            v-if="char.inventory?.bags"
            v-for="(bag, index) in char.inventory.bags"
            :key="'bag' + index"
            :bag="bag"
            :mule-power="char?.skills?.skills?.strength?.mulePower ?? 0"
          />
          <div v-else>Пусто</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="Характеристики и навыки">
        <v-expansion-panel-text>
          <v-list-item
            v-if="char.stats"
            v-for="(count, statName) of char.stats"
            :key="'stat-' + statName"
            :title="`${statsWithSkills[statName].title}: ${count}`"
            class="text-wrap"
          >
            <template #subtitle>
              <div
                v-for="(count, skillName) of char.skills.skills[statName]"
                :key="`skill-${skillName}-${statName}`"
              >
                {{
                  statsWithSkills[statName].skills.find(
                    (skill) => skill.value === skillName,
                  )?.title ?? "—"
                }}:
                {{ count }}
              </div>
            </template>
          </v-list-item>
          <div v-else>Пусто</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="Способности">
        <v-expansion-panel-text>
          <v-list-item
            v-if="char.abilities?.abilities?.length"
            v-for="(skill, index) in char.abilities?.abilities"
            :key="'skill-' + index"
            :title="skill.title"
            class="text-wrap"
          >
            <template #subtitle>
              <div
                v-for="(line, j) in skill.description.split('\n')"
                :key="`line-${j}-${index}`"
              >
                {{ line }}
              </div>
            </template>
          </v-list-item>
          <div v-else>Пусто</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="Задания">
        <v-expansion-panel-text>
          <v-list-item
            v-if="char.notes?.quests?.length"
            v-for="(quest, index) in char.notes.quests"
            :key="'skill-' + index"
            class="text-wrap"
          >
            <template #subtitle>
              <div
                v-for="(line, j) in quest.split('\n')"
                :key="`line-${j}-${index}`"
              >
                {{ line }}
              </div>
            </template>
          </v-list-item>
          <div v-else>Пусто</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="Заметки">
        <v-expansion-panel-text>
          <v-list-item
            v-if="char.notes?.notes?.length"
            v-for="(notes, index) in char.notes.notes"
            :key="'skill-' + index"
            class="text-wrap"
          >
            <template #subtitle>
              <div
                v-for="(line, j) in notes.split('\n')"
                :key="`line-${j}-${index}`"
              >
                {{ line }}
              </div>
            </template>
          </v-list-item>
          <div v-else>Пусто</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script setup lang="ts">
import { IArmor, ICharacter, ItemTypes } from "@/helpers/types"
import GmCharBag from "./gm-char-bag.vue"
import { computed } from "vue"
import {
  defaultHittingDifficulty,
  defaultStepCount,
  defaultThreshold,
  fameLvl3,
  Stats,
  statsWithSkills,
} from "@/helpers/constants.js"
import { getCurrentPointBar } from "@/helpers/utils/index.js"

const { char } = defineProps<{
  char: ICharacter
}>()

const isBard = computed(() => char.personalInfo.isBard)

const isFameLvl3 = computed(() => char.personalInfo.fame >= fameLvl3)

const manaBar = computed(() =>
  getCurrentPointBar(char.personalInfo.isMage, char.personalInfo.isBasij),
)

const armors = computed(
  () =>
    char.inventory.bags?.reduce<IArmor[]>((armors, bag) => {
      bag.items.forEach((item) => {
        if (item.isEquiped) {
          if (item.type === ItemTypes.armor) {
            armors.push(item)
          }
        }
      })

      return armors
    }, []) ?? [],
)

const stepCount = computed(() => {
  const skillBonus = char.skills.skills.agility?.athletics ?? 0
  const statBuff = Math.floor((char.stats[Stats.agility] ?? 0) / 2)

  return defaultStepCount + statBuff + skillBonus
})

const hittingDifficulty = computed(() => {
  const skillBonus = char.skills.skills.agility?.evasion ?? 0

  return defaultHittingDifficulty + skillBonus
})

const calcThreshold = computed(() => {
  const statBuff = char.stats.endurance
  const equipmentBuff = armors.value.reduce(
    (protection, armor) => protection + armor.protection,
    0,
  )

  const threshold =
    defaultThreshold +
    char.status.conditions.threshold +
    statBuff +
    equipmentBuff

  return threshold - char.status.fatigue
})

const armorColor = computed(() => {
  if (char.status.fatigue === 0) {
    return "teal"
  }

  if (calcThreshold.value === 0) {
    return "red"
  }

  return "orange"
})
</script>
